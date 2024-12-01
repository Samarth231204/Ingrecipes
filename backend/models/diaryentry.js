const mongoose = require('mongoose');

const DiaryEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now, 
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const DiaryEntry = mongoose.model('DiaryEntry', DiaryEntrySchema);

module.exports = DiaryEntry;
