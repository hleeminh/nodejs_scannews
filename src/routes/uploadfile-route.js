const express = require('express');
const router = express.Router();
const uploadfileController = require('../app/controllers/UploadfileController');

router.get('/upload-file', uploadfileController.upload_file);
router.post('/upload-file', uploadfileController.upload);

module.exports = router;