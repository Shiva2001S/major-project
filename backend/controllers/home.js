const multer = require('multer');

module.exports.home = async function (req, res) {
    console.log("yes");
    console.log(req.body);
    return res.json({
        success: true,
        name : "shiva"
    })
}