import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import loginr from'./routes/loginr.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); 
app.set("view engine", "ejs");


// Import routes



// MongoDB connection
dotenv.config();

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGO_URI

// Connect to MongoDB


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB: ', err));

// Use routes
app.use('/', loginr);

app.get('/home', (req, res) => {
    res.render('home');
});


// Define Port for Application

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
