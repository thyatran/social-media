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
    const { text, postedBy } = req.body;
    const image = req.file;

    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!text) {
      return res.status(400).json({ error: "Text field is required" });
    }

    const maxLength = 500;

    if (text.length > maxLength) {
      return res
        .status(400)
        .json({ error: `Text must be less than ${maxLength} characters` });
    }

    let imgUrl = "";

    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image.path);
      imgUrl = uploadedResponse.secure_url;
    }

    const newPost = new Post({ postedBy, text, image: imgUrl });
    console.log("Text before submitting:", text);

    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.log("Error in createPost: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.log("Error in getPost: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.postedBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Unauthorized to delete post" });
    }

    if (post.img) {
      const imgId = post.img.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log("Error in deletePost: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const likeUnlikePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const userLikedPost = post.likes.includes(userId);

    if (userLikedPost) {
      // unlike post
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      res.status(200).json({ message: "Post unliked successfully" });
    } else {
      // like post
      post.likes.push(userId);
      await post.save();
      res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (error) {
    console.log("Error in likeUnlikePost: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const replyToPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;
    const userProfilePic = req.user.profilePic;
    const username = req.user.username;

    if (!text) {
      return res.status(400).json({ error: "Text field is required" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const reply = { userId, text, userProfilePic, username };

    post.replies.push(reply);
    await post.save();

    res.status(200).json(reply);
  } catch (error) {
    console.log("Error in replyToPost: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const getFeedPosts = async (req, res) => {
  try {
    const feedPosts = await Post.find()
      .populate("postedBy", "username profilePic")
      .sort({ createdAt: -1 });

    res.status(200).json(feedPosts);
  } catch (error) {
    console.log("Error in getFeedPosts: ", error.message);

    res.status(500).json({ error: error.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    let user;
    if (req.params.username) {
      user = await User.findOne({ username: req.params.username });
    } else {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const posts = await Post.find({ postedBy: user._id })
      .populate("postedBy", "username profilePic")
      .sort({
        createdAt: -1,
      });

    res.status(200).json(posts);
  } catch (error) {
    console.log("Error in getUserPosts: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const editPost = async (req, res) => {
  try {
    const { text } = req.body;
    const img = req.file;
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.params.username !== req.user.username) {
      return res.status(401).json({ error: "Unauthorized to edit this post" });
    }

    const maxLength = 500;
    if (text && text.length > maxLength) {
      return res
        .status(400)
        .json({ error: `Text must be less than ${maxLength} characters` });
    }

    // update the image if user upload new one
    let imgUrl = post.image;
    if (img) {
      // delete the old image from cloudinary
      if (post.image) {
        const imgId = post.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(imgId);
      }

      // upload the new image
      const uploadedResponse = await cloudinary.uploader.upload(img.path);
      imgUrl = uploadedResponse.secure_url;
    }
    post.text = text || post.text;
    post.image = imgUrl;

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.log("Error in editPost: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export {
  createPost,
  getPost,
  deletePost,
  likeUnlikePost,
  replyToPost,
  getUserPosts,
  getFeedPosts,
  editPost,
};
