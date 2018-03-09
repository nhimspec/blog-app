import multer from 'multer';
import path from 'path';
// configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../client/uploads/images"));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });

export default upload;