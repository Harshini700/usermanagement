const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/login");


const express=require("express");
const app=express();

app.listen(3000,function(){
    console.log("server is running ...");
});
