function getMetadata(certificate) {
  if (!certificate || !certificate.raw) {
    console.log('No certificate found.');
    return;
  }

  const { subject, issuer, valid_from, valid_to, fingerprint, serialNumber } = certificate;
  
  console.log('Certificate Metadata:');
  console.log('Subject:', subject);
  console.log('Issuer:', issuer);
  console.log('Valid From:', valid_from);
  console.log('Valid To:', valid_to);
  console.log('Fingerprint:', fingerprint);
  console.log('Serial Number:', serialNumber);
}

module.exports = getMetadata;