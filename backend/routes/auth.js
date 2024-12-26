const express = require('express');
const crypto = require('crypto');  // Import crypto module for password hashing
const User = require('../models/user');
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Generate a salt for password hashing
        const salt = crypto.randomBytes(16).toString('hex');
        console.log('Salt Generated:', salt); // Debugging log

        // Hash the password using scrypt
        crypto.scrypt(password, salt, 64, async (err, derivedKey) => {
            if (err) {
                console.error('Error during hashing:', err); // Debugging log
                return res.status(500).json({ message: 'Error hashing password', error: err.message });
            }

            const hashedPassword = `${salt}:${derivedKey.toString('hex')}`;
            console.log('Hashed Password:', hashedPassword); // Debugging log

            // Create a new user with hashed password
            const newUser = new User({
                username,
                email,
                password: hashedPassword, // Store the hashed password
            });

            // Save the new user to the database
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error('Error registering user:', error); // Debugging log
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Split the stored password into salt and hash
        const [salt, storedHash] = user.password.split(':');
        console.log('Stored Salt:', salt); // Debugging log
        console.log('Stored Hash:', storedHash); // Debugging log

        // Rehash the entered password using the stored salt
        const derivedKey = await new Promise((resolve, reject) => {
            crypto.scrypt(password, salt, 64, (err, derivedKey) => {
                if (err) return reject(err);
                resolve(derivedKey);
            });
        });

        const inputHash = derivedKey.toString('hex');
        console.log('Input Hash:', inputHash); // Debugging log

        // Compare the hashed password
        if (inputHash === storedHash) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            console.log('Password mismatch'); // Debugging log
            res.status(400).json({ message: 'Invalid password' });
        }
    } catch (error) {
        console.error('Error logging in:', error); // Debugging log
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

module.exports = router;
