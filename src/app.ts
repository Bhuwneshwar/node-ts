import express, { Response, Request } from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer for file uploads
const upload = multer({ dest: "uploads/" }); // Optional: Set a temporary directory for uploads

app.use(cors()); // Enable CORS for cross-origin requests

// Upload endpoint (replace with your desired route)
app.post("/upload", upload.single("file"), async (req: any, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto", // Automatically detect image or video
      folder: "your_folder_name", // Optional: Specify a folder for organization
    });
    res.json({ secure_url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

// import express from "express";
// import { userRouter } from "./router/user.js";

// const app = express();
// app.use("/user", userRouter);
// app.get("/", (req, res) => {
//   res.send("hi loura");
// });

// app.listen(4000, () => {
//   console.log("server is working");
// });
