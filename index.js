const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/login");


const express=require("express");
const app=express();

const userroute=require('./routes/userroute');
app.use('/',userroute);

app.listen(3000,function(){
    console.log("server is running ...");
});
