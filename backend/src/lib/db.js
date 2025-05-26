import mongoose from "mongoose";
// function to connect the db 
export const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongoDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log("mongoDB connection error:",error);
    }
};