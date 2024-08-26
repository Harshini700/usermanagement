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

exports.signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ name: username });

        if (existingUser) {
            res.send('User already exists. Please choose a different username.');
        } else {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                name: username,
                password: hashedPassword
            });

            await newUser.save();
            res.redirect('/login');
        }
    } catch (error) {
        res.status(500).send('Error occurred during signup.');
    }
};

// Login User
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ name: username });

        if (!user) {
            res.send("Username not found");
            return;
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            res.send("Wrong password");
        } else {
            res.render("home");
        }
    } catch (error) {
        res.status(500).send("Wrong details");
    }
};


