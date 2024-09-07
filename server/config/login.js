const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/login");

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})