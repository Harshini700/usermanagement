const user=require('../models/usermodel');


const loadRegister=async(req,res)=>{
    try{
       res.render('registration');
    } 
    catch(error){
        console.log(error.message);
    }
}

module.exports={
    loadRegister
}