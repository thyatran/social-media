import { v2 as cloudinary } from "cloudinary";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const createPost = async (req, res) => {
  try {
    const { postedBy, text } = req.body;
    const img = req.file;

    if (!postedBy || !text) {
      return res
        .status(400)
        .json({ error: "Postedby and text fields are required" });
    }

    const user = await User.findById(postedBy);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Unauthorized to create post" });
    }

    const maxLength = 500;

    if (text.length > maxLength) {
      return res
        .status(400)
        .json({ error: `Text must be less than ${maxLength} characters` });
    }

    let imgUrl = "";

    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img.path);
      imgUrl = uploadedResponse.secure_url;
    }

    const newPost = new Post({ postedBy, text, image: imgUrl });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.log("Error in createPost: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const getPost = async (req, res) => {};

const likeUnlikePost = async (req, res) => {};

const replyToPost = async (req, res) => {};

const getUserPosts = async (req, res) => {};

export { createPost, getPost, likeUnlikePost, replyToPost, getUserPosts };
