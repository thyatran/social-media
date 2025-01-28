import User from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const getUserProfile = async (req, res) => {
  const username = req.params.username || req.user.username;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      userId: user._id,
      username: user.username,
      fullname: user.fullname,
      profilePic: user.profilePic,
      bio: user.bio,
    });
  } catch (error) {
    console.error("Error in getUserProfile: ", error.message);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};

const followUnfollowUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);

    if (id === req.user._id.toString()) {
      return res
        .status(400)
        .json({ error: "You cannot follow/unfollow yourself" });
    }

    if (!userToModify || !currentUser)
      return res.status(400).json({ error: "User not found" });

    const isFollowing = currentUser.following.includes(id);

    if (isFollowing) {
      // unfollow user
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
      res.status(200).json({ message: "User unfollowed successfully" });
    } else {
      // follow user
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
      res.status(200).json({ message: "User followed successfully" });
    }
  } catch (error) {
    console.log("Error in followUnfollowUser: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { bio, fullname } = req.body;
  const profilePic = req.file;
  const bioLength = 150;
  const fullnamelength = 50;

  const username = req.params.username || req.user.username;

  try {
    let user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found" });

    if (req.params.username !== req.user.username) {
      return res
        .status(400)
        .json({ error: "You cannot update another user's profile" });
    }

    if (profilePic) {
      if (user.profilePic) {
        await cloudinary.uploader.destroy(
          user.profilePic.split("/").pop().split(".")[0]
        );
      }

      const uploadedResponse = await cloudinary.uploader.upload(
        profilePic.path
      );
      user.profilePic = uploadedResponse.secure_url;
    }

    if (bio && bio.length > bioLength) {
      return res
        .status(400)
        .json({ error: `Bio can't be longer than ${bioLength} characters` });
    } else {
      user.bio = bio || user.bio;
    }

    if (fullname) {
      if (fullname.length > fullnamelength) {
        return res.status(400).json({
          error: `Fullname can't be longer than ${fullnamelength} characters`,
        });
      }
      user.fullname = fullname;
    }

    user = await user.save();

    res.status(200).json({
      userId: user._id,
      username: user.username,
      fullname: user.fullname,
      profilePic: user.profilePic,
      bio: user.bio,
    });
  } catch (error) {
    console.log("Error in updateUser: ", error.message);
    res.status(500).json({ error: error.essage });
  }
};

export { getUserProfile, followUnfollowUser, updateUser };
