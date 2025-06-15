import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


// import { connect } from "mongoose";
dotenv.config();



const app=express();
// by this we can read the backend file
const port=process.env.port;

// this will helpextract json  date from body
app.use(express.json());

app.use(cookieParser());

app.use(cors
  ({origin:"http://localhost:5175",
    Credential:true})
);

// for the authentication of the user
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)


app.listen(port,()=>{
    console.log("server is runing on port :"+port);
    connectDB()
});