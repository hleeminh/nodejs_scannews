const express = require('express');
const router = express.Router();
const detailCtrl = require('../app/controllers/DetailCtrl');

router.get('/detail/upload', detailCtrl.upload_file);
// router.post('/detail/upload', detailCtrl.upload);

module.exports = router;