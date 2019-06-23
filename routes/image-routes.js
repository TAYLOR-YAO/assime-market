    var express = require('express');
    var fileUpload = require('express-fileupload');
    // var fs = require("fs");
    const router = express.Router();
    const uuidv4 = require('uuid/v4');
    const multer = require('multer');
    const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, './src/uploads');
  }
});


const upload = multer({ storage: storage });




router.post('/image', upload.single('selectedFile'), (req, res) => {
  console.log(req.file)
  res.send( req.file );
});

module.exports = router;