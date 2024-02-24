const express = require('express');
const router = express.Router();
const multer = require('multer');
const controllers = require('../controllers/home.js');
const fs = require('fs');

const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        if(fs.existsSync('videos')){
            fs.mkdir('videos');
        }  
        
        cb(null, 'videos');
    },
    filename : function (req, file, cb) {
        cb(null, file.originalname)
    },
});

const uploads = multer({storage});

// router.post('/', uploads.single('video'), controllers.home);
router.post('/', uploads.fields(
    {
      name: "videos",
    },
  ), async (req, res) => {
    try {
        // Your existing code here
        console.log('Received a video upload request');
        console.log('File:', req.file);
        console.log('Body:', req.body);
        await controllers.home(req, res);
    } catch (error) {
        console.error('Error in route handler:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    });

module.exports = router;