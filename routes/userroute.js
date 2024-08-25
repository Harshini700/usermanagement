 const express=require("express");

 const user_route=express();

 user_route.set('view engine','ejs');
 user_route.set('views','./views/users');

 const usercontroller=require("../controllers/usercontroller");

 user_route.get('/register',usercontroller.loadRegister);

 module.exports=user_route;