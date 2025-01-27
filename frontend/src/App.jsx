import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/homepage/Home";
import Profile from "./pages/profile/Profile";
import Search from "./pages/searchpage/Search";
import LikedPage from "./pages/likedpage/LikedPage";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/search"
          element={authUser ? <Search /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/liked-posts"
          element={authUser ? <LikedPage /> : <Navigate to={"/login"} />}
        />

        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/liked-posts" element={<LikedPage />} /> */}
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
