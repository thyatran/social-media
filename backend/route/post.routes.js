import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likeUnlikePost,
  replyToPost,
  getUserPosts,
  editPost,
  getFeedPosts,
} from "../controllers/post.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.get("/user/:username", protectRoute, getUserPosts);
router.get("/:id", protectRoute, getPost);
router.get("/", protectRoute, getFeedPosts);

router.post("/create", protectRoute, upload.single("image"), createPost);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);
router.put("/edit/:id", protectRoute, editPost);

export default router;
