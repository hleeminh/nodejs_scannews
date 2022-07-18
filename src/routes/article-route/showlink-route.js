const express = require('express');
const router = express.Router();
const showlinkController = require('../../app/controllers/articleCtrl/ShowlinkController');


router.put('/article/edit-link/:id', showlinkController.update);
router.get('/article/edit-link/:id', showlinkController.edit);
router.delete('/article/edit-link/:id', showlinkController.delete);
router.get('/article/show-link', showlinkController.show_link);


module.exports = router;