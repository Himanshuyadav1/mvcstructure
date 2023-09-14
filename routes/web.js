// Creating routes

const express = require('express');
//Creating Router instance from express
const router = express.Router();

//Importing controller for home and about
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');

// Defining Route for Home page
router.get('/', homeController); // instead of cb using controller for home

// Defining Route for About page
router.get('/about', aboutController); // instead of cb using controller for about

// exporting the router in old way
module.exports = router;