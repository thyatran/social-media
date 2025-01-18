import express from "express";
import { updateUser } from "../controllers/user.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.put(
  "/update/:id",
  protectRoute,
  upload.single("profilePic"),
  updateUser
);

export default router;
