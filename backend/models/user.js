const mongoose = require('mongoose');

// schema creation is happening here  like key value pairs in dictionary
const userSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);
