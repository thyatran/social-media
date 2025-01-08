import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./route/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on Port ${PORT}`);
});
