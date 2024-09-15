const getCertificate = require('./getCertificate'); // Adjust the path as necessary

const domain = 'dummyjson.com'; // Replace with a valid domain

getCertificate(domain)
  .then(cert => {
    console.log('Certificate Details:', cert);
  })
  .catch(error => {
    console.error('Error fetching certificate:', error);
  });
