// Creating routes

const express = require('express');
//Creating Router instance from express
const router = express.Router();

// Defining Route for Home page
router.get('/', (req, res) => {
    // Sending basic html in response
    res.send('<h1>Home Page</h1>'); 
});

// Defining Route for About page
router.get('/about', (req, res) => {
    // Sending basic html in response
    res.send('<h1>About Page</h1>'); 
});

// exporting the router in old way
module.exports = router;
