import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/homepage/Home";
import Profile from "./pages/profile/Profile";
import Search from "./pages/searchpage/Search";
import LikedPage from "./pages/likedpage/LikedPage";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/liked-posts" element={<LikedPage />} />
      </Routes>
    </div>
  );
};

export default App;
