const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    try {
        
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // naya user being added 
        const newUser = new User({
            username,
            email,
            password,
        });

        // saving into the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

// posting request to server to authenticate the entered credentials
router.post('/login', async (req, res) => {
    console.log('Received login request:', req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password' });
    }

    try {
        // using findone command to find the first email matching entry
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check if the password matches 
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // If login is successful
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

module.exports = router;
