const multer = require('multer');
const fs = require('fs');
const path = require('path');
module.exports.home = async function (req, res) {
    
    console.log(req.body);
    return res.json({
        success: true,
        name: "shiva"
    })
}