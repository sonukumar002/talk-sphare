import mongoose from "mongoose";

// now we will make a user schema 
const userSchema = new mongoose.Schema(
    // now this will be with all the things that a user will need 
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        // each user will have a full name 
        fullname: {
            type: String,
            required: true,

        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilepic: {
            type: String,
            default: "",
        },

    },
    // this section timestmped will update the require things like once you update the things it will be responsible for changing it 
    {
        timestamps: true
    }
);
// now we have created the schema now we will create the model of the schema 

const User =mongoose.model("User",userSchema);

export default User;