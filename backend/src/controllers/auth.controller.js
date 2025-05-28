// import { Profiler } from "react";
import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
// import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    // to signup we will need a user datebase for that we will be using mongdb for that we will go to mongodb and attach it 
    const { fullname, email, password } = req.body;
    try {
        // now in this we will signup the user who have their password and user name and all the req fields

        // hash password=> this will conver the password in an encrypted form so that no one is able to read it 
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "all the fields are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({
                message: "password must be at least 6 characters"
            });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // hash password
        // for this we have inported bcrypt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        });

        if (newUser) {
            // to save everything here we will generate a jwt token here for that we will make a function to make the code clean and it  will retrive all the data in utils.js in libs
            generateToken(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                profilepic: newUser.profilepic,
            });
        } else {
            res.status(400).json({ message: "invalid user data" });
        }
    }
    catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ message: "internal server error" });
    }
};

// fro this part we are going to check whether the email exists or not if it does then we will match the password and then will let the user log in and if the password does not match then we will give a msg of invalid credentials
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        // this will not let them know whether email is wrong or the password
        if (!User) {
            return res.status(400).json({ message: "invalid credentials" })
        }
        // now if the password is wrong
        const ispasswordcorrect = await bcrypt.compare(password, user.password)
        if (!ispasswordcorrect) {
            return res.status(400).json({ message: "invalid credentials" })
        }
        // if its correct then we will be generatingtoken
        generateToken(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            profilepic: user.profilepic,
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "internal server error" });
    }
};



export const logout = (req, res) => {
    // while the user is logging out we just have to clar out the cookies 
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "logged out sussfully" });

    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({ message: "internal server error" });
    }
};


export const updateProfile = async (req, res) => {
    try {
        const { profilepic } = req.body;
        const userId = req.user._id;
        if (!profilepic) {
            return res.status(400).json({ message: "profile pic is required" });
        }
        const uploadResponse = await cloudinary.uploader.upload(profilepic)
        const updatedUser = await User.findByIdAndUpdate(userId, { profilePic: uploadResponse.secure_url }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log("error in update profile:", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("eror in checkAuth controller", error.message);
        res.status(500).json({ message: "internal server error" })
    }
}