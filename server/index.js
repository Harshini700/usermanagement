import express from "express";
import connectDB from './config/logind.js';
import loginr from'./routes/loginr.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); 
app.set("view engine", "ejs");

connectDB();
// Use routes
app.use('/', loginr);

app.get('/home', (req, res) => {
    res.render('home');
});


// Define Port for Application

app.listen(5001, () => {
    console.log(`Server listening on port 5001`);
});
