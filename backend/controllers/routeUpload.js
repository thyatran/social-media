import express from "express";
import cloudinary from "../utils/cloudinary.js"; // Cloudinary configuration
import upload from "../middlewares/multer.js"; // Multer middleware for file upload

const router = express.Router();

// Route for file upload
router.post("/upload", upload.single("image"), (req, res) => {
  // Multer error handling (e.g., file not found or unexpected field)
  if (req.fileValidationError) {
    return res.status(400).json({
      success: false,
      message: req.fileValidationError,
    });
  }

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  // Upload the file to Cloudinary
  cloudinary.uploader.upload(req.file.path, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Error uploading file to Cloudinary",
      });
    }

    res.status(200).json({
      success: true,
      message: "File uploaded successfully!",
      data: result, // Return Cloudinary file details
    });
  });
});

export default router;
