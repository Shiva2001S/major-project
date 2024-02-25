const port = 80;
const express = require('express');
const router = express.Router();
const multer = require('multer');
const app = express();
const fs = require('fs');
const cors = require('cors');
const controllers = require('./controllers/home.js');
const path = require('path');
// const controllers = path('./controllers/home');


// app.use(express.urlencoded({ extended: true }));

// app.use(express.urlencoded());
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "public")));

// const storage = multer.diskStorage({
//     destination : async function (req, file, cb) {
//         if(fs.existsSync('./videos')){
//             await fs.mkdir('./videos');
//         }  
        
//         return cb(null, 'videos');
//     },
//     filename : function (req, file, cb) {
//         return cb(null, file.originalname)
//     },
// });

// const upload = multer({storage});

// router.post('/', uploads.single('video'), async (req, res) => {
//     console.log("yes");
//     // console.log(req.body);
//     // return res.json({
//     //     success: true,
//     //     name : "shiva"
//     // })
//     try {
//         // Your existing code here
//         controllers.home(req, res);
//     } catch (error) {
//         console.error('Error in route handler:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// router.post('/', uploads.single('video'), controllers.home);
const contr = require('./routes/home.js'); 
app.use('/', contr);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`app is running on port ${port}`);
})