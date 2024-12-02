// route/contact.route.js

import express from 'express';
const router = express.Router();

// Sample GET route for contact information
router.get('/', (req, res) => {
    res.send('Contact information retrieved successfully');
});

// Sample POST route for submitting contact information
router.post('/', (req, res) => {
    const contactInfo = req.body; // Capture contact info from request body
    // Logic to handle saving or processing contactInfo
    res.status(201).send(contactInfo); // Respond with the received contact information
});

export default router;
