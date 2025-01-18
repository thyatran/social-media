import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

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
    const salt = await bcryptjs.genSalt(10); // 10 is the salt rounds
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      profilePic,
    });

    if (newUser) {
      // Generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save(); // save user to db

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
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
