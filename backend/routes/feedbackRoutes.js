// routes/feedbackRoutes.js
const express = require('express');
const Feedback = require('../models/modelfeedback'); // Path to the Feedback model
const router = express.Router();

// Define the POST route for submitting feedback
router.post('/feedback', async (req, res) => {
    const { name, email, rating, comments } = req.body;

    try {
        const newFeedback = new Feedback({ name, email, rating, comments });
        await newFeedback.save();
        res.status(200).json({ message: 'Feedback saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving feedback', error });
    }
});

module.exports = router;
