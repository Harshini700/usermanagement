import express from "express";
import login from './config/login';
import mongoose from "mongoose";
import loginr from'./routes/loginr';

const app = express();

// Import routes



// MongoDB connection
dotenv.config();

const PORT = process.env.PORT || 5001;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB: ", error));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); 
app.set("view engine", "ejs");

// Use routes
app.use('/', loginr);



// Define Port for Application

app.listen(PORT, () => {
    console.log(`Server listening on port ${port}`);
});
