import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, password, confirmPassword, profilePic } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWORD HERE

    const newUser = new User({
      username,
      password,
      profilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  console.log("Login");
};

export const logout = async (req, res) => {
  console.log("Logout");
};
