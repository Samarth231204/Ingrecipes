const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    diet: { type: String, required: true },
    location: { type: String, required: true },
    dob: { type: Date, required: true },
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);

