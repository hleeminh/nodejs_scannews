//  đi từ index-route.js ==>
// đi tới =>> ImportlinkController.js

const express = require('express');
const router = express.Router();
const importlinkController = require('../app/controllers/ImportlinkController');


router.use('/:slug', importlinkController.show_link);
router.use('/', importlinkController.import_link);


module.exports = router;