const express = require('express');
const router = express.Router();
const multer = require('multer');
const controllers = require('../controllers/home.js');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const videosDirectory = '../videos';

    if (!fs.existsSync(videosDirectory)) {
      // Use fs.mkdirSync and add { recursive: true } for nested directories
      fs.mkdirSync(videosDirectory, { recursive: true });
    }

    cb(null, videosDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("Only videos are allowed!"));
    }

    cb(null, true);
  },
});

// router.post('/', uploads.single('video'), async ()=>{
//     try{
//         console.log("post");
//         await controllers.home
//     }catch(err){
//         console.log(err);
//     }
// });
router.post('/', upload.single('video'), controllers.home);
// router.post('/', upload.fields(
//     [{
//       name: 'video',
//       maxCount: 1,
//     }]
//   ), controllers.home);
// router.post('/', upload.fields(
//     [{
//       name: "video",
//     }]
//   ), controllers.home);
// router.post('/', uploads.fields(
//     {
//       name: "videos",
//     },
//   ), async (req, res) => {
//     try {
//         // Your existing code here
//         console.log('Received a video upload request');
//         console.log('File:', req.file);
//         console.log('Body:', req.body);
//         await controllers.home(req, res);
//     } catch (error) {
//         console.error('Error in route handler:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
//     });

module.exports = router;

