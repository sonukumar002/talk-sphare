import express from "express";
import {checkAuth, login, logout, signup,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// at the time of login and log out we will call this file 
// to handle this all we will create a new place (auth.controller.js)and will use this all the function to make it active and call each function
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

// in this we will be adding a route to update a profile pic and other things but not the fullname and the email id but not for everyone but only for the authorized one so it will be protected
router.put("/update-Profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth)
export default router;