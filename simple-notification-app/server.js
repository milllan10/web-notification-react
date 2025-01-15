const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();

// Use CORS middleware to allow requests from specific origins
app.use(cors({
  origin: '*', // Allow requests from this frontend URL
  methods: ['GET', 'POST'],       // Allow specific HTTP methods
  credentials: true,              // Allow cookies if needed
}));

// API endpoint to trigger a notification message
app.get('/api/notification', (req, res) => {
  res.json({ message: 'Hello from the backend! This is your notification.' });
});

const PORT = 5000; // Backend will run on port 5000
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
