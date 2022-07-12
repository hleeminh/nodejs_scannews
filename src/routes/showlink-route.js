const express = require('express');
const router = express.Router();
const showlinkController = require('../app/controllers/ShowlinkController');

router.use('/show-link', showlinkController.show_link);

module.exports = router;