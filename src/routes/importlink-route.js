//  đi từ index-route.js ==>
// đi tới =>> ImportlinkController.js

const express = require('express');
const router = express.Router();
const importlinkController = require('../app/controllers/ImportlinkController');

router.get('/show-link', importlinkController.show_link);
router.get('/import-link', importlinkController.import_link);

module.exports = router;