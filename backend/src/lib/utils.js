// this package will allow us to handle the authentaticion
import JWT from "jsonwebtoken"
// we are creating a function to generate a token now we need an environment variable and we will create it in .env
export const generateToken = (userID, res) => {
    // for this we will import the jwt 
    const token = JWT.sign({ userID }, process.env.JWT_SECRET, { expiresIn: "7d" ,
    });
    // expiresIn:"7d",
    // now we will be sending cookies 
res.cookie("JWT",token,{
    maxAge:7*24*60*60*1000,//the time here1000 is in millisecond
    httpOnly:true, //it prevents xss attacks cross site scripting attacks
    sameSite:"strict",//csfr attacks cross -site request forgery attacks
    secure:process.env.NODE_env !=="development",
});
return token;
};


