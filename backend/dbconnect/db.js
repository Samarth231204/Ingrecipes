const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://abhinavt244:HklD5kiFiQdt7xY7@ingrecipes.d0duk.mongodb.net/?retryWrites=true&w=majority&appName=Ingrecipes';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
