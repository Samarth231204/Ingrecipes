const mongoose = require('mongoose');

// Use the MONGO_URI from environment variables or fallback to a default if running locally
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
