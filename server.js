const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`${name} | ${email} | ${message}`);

  res.json({ success: true, message: 'Contact form received' });
});

app.post('/api/demo-request', (req, res) => {
  const { firstName, lastName, email, phone, filingStatus, priorYear, notes, clientType } = req.body;

  console.log('\n========== NEW DEMO REQUEST ==========');
  console.log(`Client Type: ${clientType}`);
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Filing Status: ${filingStatus}`);
  console.log(`Filed Last Year: ${priorYear}`);
  if (notes) console.log(`Notes: ${notes}`);
  console.log(`Timestamp: ${new Date().toLocaleString()}`);
  console.log('======================================\n');

  res.json({ success: true, message: 'Demo request received' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log('📝 Waiting for demo requests...\n');
});
