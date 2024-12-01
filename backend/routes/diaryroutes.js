const express = require('express');
const router = express.Router();
const DiaryEntry = require('../models/diaryModel');  // Import Diary model

// POST: Add a new diary entry
router.post('/add-entry', async (req, res) => {
  const { userId, content } = req.body;  // assuming you have user ID from authentication
  const entryDate = new Date();  // Current date will be used for entry

  try {
    const newEntry = new DiaryEntry({
      user: userId,
      content,
      date: entryDate
    });

    await newEntry.save();
    res.status(200).json({ message: 'Diary entry added successfully!', entry: newEntry });
  } catch (error) {
    res.status(500).json({ error: 'Error adding diary entry' });
  }
});

// GET: Get diary entries by user and specific date
router.get('/view-entry/:date', async (req, res) => {
  const { userId } = req.params;  // User ID from params or session
  const { date } = req.query;  // Query parameter for date (in yyyy-mm-dd format)

  try {
    const entryDate = new Date(date);
    const entry = await DiaryEntry.findOne({ user: userId, date: entryDate });

    if (!entry) {
      return res.status(404).json({ message: 'No entry found for this date.' });
    }

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching diary entry' });
  }
});

module.exports = router;
