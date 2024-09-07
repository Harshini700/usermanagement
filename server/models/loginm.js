const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});
const User=new mongoose.model('User',userschema);
module.exports=User;
