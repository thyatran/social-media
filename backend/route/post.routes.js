import express from "express";
import { createPost } from "../controllers/post.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/create", protectRoute, upload.single("img"), createPost);

export default router;
