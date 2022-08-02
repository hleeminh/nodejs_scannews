const express = require('express');
const router = express.Router();
const detailCtrl = require('../app/controllers/DetailCtrl');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/json-files')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage });


router.get('/detail/upload', detailCtrl.upload_file);
router.get('/detail/show-detail', detailCtrl.show_detail);
router.delete('/detail/:id', detailCtrl.delete);
router.post('/detail/upload', upload.single('myFile'), detailCtrl.upload);

module.exports = router;