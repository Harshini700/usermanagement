const bcrypt=require('bcrypt');
const User=require('../models/loginm');

//render login page

exports.getloginpage=(req,res)=>{
    res.render("login");
};

//render sign up page
 
exports.getsignuppage=(req,res)=>{
    res.render("signup");
};

//register user

exports.postsignup=async (req, res) => {

    const data =new User({
        name: req.body.username,
        password: req.body.password
    });

    // Check if the username already exists in the database
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        res.send('User already exists. Please choose a different username.');
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the original password with the hashed one

        const userdata = await collection.insertMany(data);
        console.log(userdata);
    }

};


// Login User
exports.postlogin=async(req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("User name cannot found")
        }
        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send("wrong Password");
        }
        else {
            res.rendirect('/home');
        }
    }
    catch {
        res.send("wrong Details");
    }
};
