const express=require('express');
const router=express.Router();
const controller=require("../controller/controller");

//router to render login page
router.get("/login",controller.getloginpage);
router.get("/signup",controller.getsignuppage);

//router to handle signup and login

router.post("/signup",controller.getsignuppage);
router.post("/login",controller.getloginpage);


module.exports=router;