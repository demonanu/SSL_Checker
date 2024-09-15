const tls = require('tls');


function getCertificate(hostname, port = 443) {
  return new Promise((resolve, reject) => {
    const options = {
      host: hostname,
      port: port,
      rejectUnauthorized: false, // Allow self-signed certificates
      minVersion: 'TLSv1.2', // Set minimum TLS version
     
    };

    const socket = tls.connect(options);
    
    // Set a timeout for the connection
    socket.setTimeout(10000); // 10 seconds timeout

    socket.on('secureConnect', () => {
      console.log('Connection established with', hostname);
      const certificate = socket.getPeerCertificate();
      socket.end(); // Close the connection
      resolve(certificate);
    });

    socket.on('error', (e) => {
      console.error('Socket error:', e.message); // Log the error
      reject(e);
    });

    socket.on('timeout', () => {
      console.error('Connection timeout');
      socket.end();
      reject(new Error('Connection timeout'));
    });

    socket.on('close', () => {
      console.log('Connection closed');
    });
  });
}


module.exports = getCertificate;
