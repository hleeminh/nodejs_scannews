const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/homeController');


router.use('/', homeController.home);


module.exports = router;