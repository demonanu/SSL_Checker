const express = require('express');
const getCertificate = require('./getCertificate'); // Adjust the path as necessary
const getMetadata = require('./getMetadata');
const app = express();

app.get('/certificate/:domain', async (req, res) => {
  try {
    const domain = req.params.domain;
    const certificate = await getCertificate(domain);
    //const metadata = await getMetadata(certificate);
    res.json(certificate);

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certificate', details: error.message });
  }
});

const port = 3006;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
