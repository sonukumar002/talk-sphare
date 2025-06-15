// we will be creating one instance which we will be using through out our instance

import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:"http://localhost:5001/api",
    withCredentials:true,
})