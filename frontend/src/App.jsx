// import React from 'react'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route,Navigate } from "react-router-dom";
// import axios from "axios";
// import { axiosInstance } from "./lib/axios";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";
const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()
  useEffect(() => { checkAuth() }, [checkAuth]);
  console.log({ authUser });


  // we are making here a loding screen so when the checking is going on and there is no authentication then it should return the loading screen 
  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  );
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser?<SignUpPage />:<Navigate to="/"/>} />
        <Route path="/login" element={!authUser?<LoginPage />:<Navigate to="/"/>} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ?<ProfilePage />:<Navigate to ="/login"/>} />
      </Routes>
    </div>
  );
};

export default App
