const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'static')));

// Define routes

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// 404 route (if no other routes match)
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
