const express = require("express");
const Router = express.Router();
const login= require('../module/login.module');

const bcrypt = require('bcrypt');


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user in MongoDB
        const user = await login.findOne({ email});

        // Check if the user exists
        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: 'User not found' });
        }

        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            console.log("password not match");
            return res.status(401).json({ error: 'Authentication failed' });
        }

        // Generate token
        
 // Assuming user._id is the user's ID in MongoDB

        // Return token along with the success message
        console.log("Login successful");
        res.status(200).json({ message: 'Login successful'});
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: 'Login failed' });
    }
};
