// import React from 'react'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div >
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        

      </Routes>
    </div>
  );
};

export default App
