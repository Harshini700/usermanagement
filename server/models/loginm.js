const mongoose=require("mongoose");
const userschema=new mongoose.schema({
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
const User=mongoose.model('User',userschema);
module.exports=User;
