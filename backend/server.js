const express = require('express');
const connectDB = require('./dbconnect/db'); 

const routes = require('./routes'); 
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profiles');
const feedbackRoutes = require('./routes/feedbackRoutes');
const path = require('path'); // To resolve file paths for static files

const cors = require('cors');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();  

// Middleware for JSON parsing
app.use(express.json()); 
app.use(cors());

// API Routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for any request that isn't an API route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
