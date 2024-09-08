const express = require('express');
const collection = require('./config/login');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Import routes
const loginr = require('./routes/loginr');


// MongoDB connection

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); 
app.set("view engine", "ejs");

// Use routes
app.use('/', loginr);



// Define Port for Application
const port = 5001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
