import express from "express";
import { login,logout,signup } from "../controllers/auth.controller.js";

const router = express.Router();

// at the time of login and log out we will call this file 
// to handle this all we will create a new place (auth.controller.js)and will use this all the function to make it active and call each function
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;