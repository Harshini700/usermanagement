import express from "express";
import { signup, login,registeruser,loginuser,renderHome } from "../controller/controller.js";
const router = express.Router();

router.get('/login',login);    // Route for login page
router.get('/signup',signup);
router.post("/signup",registeruser);
router.post("/login", loginuser);
router.get('/home', renderHome); 

export default router;