const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Import routes
const loginm = require('./routes/loginm');

// MongoDB connection
mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Use routes
app.use('/', loginm);

// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
