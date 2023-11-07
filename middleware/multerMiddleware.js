import multer from "multer";

//We can go with memory storage or we can go with disk storage.
// we create disk storage, we will need that file in order to send it to Cloudinary.

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // set the directory where uploaded files will be stored
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    // set the name of the uploaded file
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;