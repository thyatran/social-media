import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./route/auth.routes.js";
import userRoutes from "./route/user.routes.js";
import postRoutes from "./route/post.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000", // Local development URL
      "https://social-media-fawn-iota.vercel.app", // Production URL
    ],
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on Port ${PORT}`);
});
