import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute=async(req,res,next)=>{
try {
    // we will check if there is token or not 
    const token=req.cookies.JWT
// if there is no token or cookies
    if (!token){
        return res.status(401).json({message:"unauthorized -No token provided"});
    }
    // if ther is a token then we need to decode it 
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded){
        return res.status(401).json({message:"unauthorized -invalid token"});
    }

    const user=await User.findById(decoded.userId).select("-password");

    if(!user){
        return res.status(401).json({message:"user not found"});
    }
// now we passwd everything means that the user is authintacated so we will go with the next step
    req.user=user

    next()
} catch (error) {
    console.log("error in protctRoute middleware: ",error.message);
    res.status(500).json({message:"internal server error"});
}
};