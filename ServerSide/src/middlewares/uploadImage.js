const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique name with extension
  },
});

// Initialize the upload middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});

// For single file upload
const uploadSingle = upload.single("images");

// For multiple file upload (max 5 images)
const uploadMultiple = upload.array("images", 5);

module.exports = {
  uploadSingle,
  uploadMultiple,
};

