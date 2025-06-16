const express = require('express');
const path = require('path');
// trigger redeploy

const app = express();
// ✅ Railway requires PORT to be 8080 (or process.env.PORT)
const PORT = process.env.PORT || 8080;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route all requests to index.html (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// ✅ Key detail: use '0.0.0.0' as the host
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
