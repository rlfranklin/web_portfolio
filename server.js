require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// API route to securely provide the email
app.get('/email', (req, res) => {
    res.json({ email: process.env.CONTACT_EMAIL });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
