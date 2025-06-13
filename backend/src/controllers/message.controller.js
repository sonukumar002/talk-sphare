import User from "../models/user.model.js";
import message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";


export const getUserSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        // we will be finding all the users but not the currently loggged in user
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.error("error in getuserForSidebar:",error.message);
        res.status(500).json({error:"internal server error"});
    }
};

// now we are making the function to get the message chat when we click on the particular chat
export const getMessages=async(req,res)=>{
try {
   const {id:userToChatId}=req.prems
   const myId=req.user._id;
//    this will let us find all the message where sender is me and the receib=ver is me
   const messages=await message.find({
    $or:[
        {senderId:myId,receiverId:userToChatId},
        {senderId:userToChatId,receiverId:myId}
    ]
   })

   res.status(200).json(messages)
} catch (error) {
    console.error("error in get message controller:",error.message);
        res.status(500).json({error:"internal server error"});
}

}

// now we are creating the function to get the message which will be image or text
export const sendMessage=async(req,res)=>{
try {
    const{text, image}=req.body;
    const {id:receiverId}=req.params;
    const senderId=req.user._id;

    let imageUrl;
    if(image){
        const uploadResponse=await cloudinary.uploader.upload(image);
        imageUrl=uploadResponse.secure_url;
    }
    const newMessage=new message({
        senderId,
        receiverId,
        text,
        image:imageUrl,
    });

    await newMessage.save();
    res.status(201).json(newMessage)
} catch (error) {
    // 
    console.log("error in Sending Message controller:",error.message);
    res.ststus(500).json({error:"internal server error"});
}
};