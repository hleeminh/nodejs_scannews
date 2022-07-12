const express = require('express');
const router = express.Router();
const linkController = require('../app/controllers/LinkController');

router.post('/link', linkController.link);


module.exports = router;