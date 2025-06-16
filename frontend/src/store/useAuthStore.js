import { create } from "zustand"
import { axiosInstance } from "../lib/axios.js"
// import { signup } from "../../../backend/src/controllers/auth.controller.js";





export const useAuthStore = create((set) => ({
    authUser: null,
    isSigninUp: false,
    isloggingin: false,
    isUpdatingProfile: false,

    isCeckingAuth: true,

    checkAuth:async()=>{
        try {
            const res=await axiosInstance.get("/auth/check-auth");
            set({authUser:res.data});
        } catch (error) {
            console.log("error in checkAuth:",error);
            set({authUser:null});
        }
        finally{
            set({isCeckingAuth:false});
        }
    },

    signup:async(data)=>{

    }
}))