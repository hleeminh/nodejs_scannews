const express = require('express');
const router = express.Router();
const uploadfileController = require('../../app/controllers/detailCtrl/UploadfileController');

router.get('/detail/upload-file', uploadfileController.upload_file);
router.post('/detail/upload-file', uploadfileController.upload);

module.exports = router;