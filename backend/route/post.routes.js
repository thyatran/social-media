import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likeUnlikePost,
  replyToPost,
  getUserPosts,
  editPost,
} from "../controllers/post.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.get("/:id", getPost);
router.get("/user/:username", getUserPosts);
router.post("/create", protectRoute, upload.single("img"), createPost);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);
router.put("/edit/:id", protectRoute, upload.single("img"), editPost);

export default router;
