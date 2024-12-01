const express = require('express');
const Profile = require('../models/userprofile');
const router = express.Router();

// PUT route for updating or creating a new profile
router.put('/edit-profile', async (req, res) => {
    const { name, age, diet, location, dob } = req.body;  // Retrieve profile data from the request body

    try {
        // Check if the profile already exists (optionally, you can skip this check to create a new profile every time)
        let profile = await Profile.findOne({ name });

        if (profile) {
            // If the profile exists, update it
            profile.age = age;
            profile.diet = diet;
            profile.location = location;
            profile.dob = dob;

            await profile.save();  // Save the updated profile
            return res.status(200).json({ message: 'Profile updated successfully.' });
        } else {
            // If no profile found, create a new one
            profile = new Profile({
                name,
                age,
                diet,
                location,
                dob,
            });

            await profile.save();  // Save the new profile
            return res.status(201).json({ message: 'Profile created successfully.' });
        }
    } catch (error) {
        console.error('Error updating or creating profile:', error);
        return res.status(500).json({ message: 'Error occurred while processing profile.' });
    }
});

module.exports = router;
