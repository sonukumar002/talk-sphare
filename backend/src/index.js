import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
// import { connect } from "mongoose";
dotenv.config();



const app=express();
// by this we can read the backend file
const port=process.env.port;

// this will helpextract json  date from body
app.use(express.json());

// for the authentication of the user
app.use("/api/auth",authRoutes)

app.listen(port,()=>{
    console.log("server is runing on port :"+port);
    connectDB()
});