const mongoose = require('mongoose');

// Access MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        // Log the MONGO_URI to check if it's loaded correctly
        console.log('MongoDB URI:', MONGO_URI);  

        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not defined");
        }

        // Attempt to connect to MongoDB using the URI (without deprecated options)
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
