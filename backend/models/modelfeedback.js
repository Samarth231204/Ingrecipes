const mongoose = require('mongoose');

// Define the schema for the feedback form
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for the feedback schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
