import { text } from "express";
import mongoose from "mongoose";
// here we are creating the schema of the message each schema will have a sendeid receicerid and in image and text
const messageSchema = new mongoose.Schema(
{
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:"true",
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"User",
        require:"true",
    },
    // text and image are not required as some message can have only text aor omly image
    text:{
        type:String,
    },
    image:{
        type:String,
    },
},
{
    timestamps:true
}
);


const message=mongoose.model("message",messageSchema);
export default message;