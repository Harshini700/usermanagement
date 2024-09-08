import bcrypt from "bcrypt";
import User from '../models/loginm.js';

//render login page

export const login = async (req, res) =>{
    res.render("login");
};

//render sign up page
 
export const signup = async (req, res) =>{
    res.render("signup");
};

//register user

export const registeruser=async (req, res) => {

    const data =new User({
        name: req.body.username,
        password: req.body.password
    });

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ name: data.name });

    if (existingUser) {
        res.send('User already exists. Please choose a different username.');
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the original password with the hashed one
        
        const userdata = await data.save(); // Save the new user to the database
        console.log('User registered with hashed password:', userdata.password);
        res.send('User registered successfully.');
    }

};


// Login User
export const loginuser=async(req, res) => {
    try {
        const check = await User.findOne({ name: req.body.username });
        if (!check) {
            return res.send("User name cannot found")
        }
        console.log("User found:", check);
        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            console.log("Password mismatch:", req.body.password, check.password);
            return res.send("wrong Password");
        }
        else {
           return  res.redirect("/home");
        }
    }
    catch(error) {
        console.error("Error:", error);
        return res.send("Error with login details");
    }
};
export const renderHome = (req, res) => {
    res.render('home');
};
