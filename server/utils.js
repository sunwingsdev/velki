const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./uploads/images";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().toISOString().replace(/:/g, "-");

    const originalName = file.originalname;
    const sanitizedOriginalName = originalName.replace(/\s/g, "_");
    cb(null, `${timestamp}_${sanitizedOriginalName}`);
  },
});

const upload = multer({ storage });

// Delete file function
const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      return reject(new Error("File not found"));
    }
    fs.unlink(fullPath, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = {
  upload,
  deleteFile,
};
