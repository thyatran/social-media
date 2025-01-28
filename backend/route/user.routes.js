import express from "express";
import {
  getUserProfile,
  followUnfollowUser,
  updateUser,
} from "../controllers/user.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.get("/:username", protectRoute, getUserProfile);
router.put(
  "/update/:username",
  protectRoute,
  upload.single("profilePic"),
  updateUser
);
router.post("/follow/:id", protectRoute, followUnfollowUser); // toggle state(follow/unfollow)

export default router;
