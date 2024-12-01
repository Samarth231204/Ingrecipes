const express = require('express');
const router = express.Router();

// Basic route to test
router.get('/', (req, res) => {
    res.send('Welcome to the Ingrecipes API!');
});

module.exports = router;
