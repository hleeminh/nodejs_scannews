const express = require('express');
const router = express.Router();
const articleCtrl = require('../app/controllers/ArticleCtrl');

router.get('/article/import', articleCtrl.import_link);
router.post('/article/import', articleCtrl.import);

router.put('/article/update/:id', articleCtrl.update);
router.get('/article/update/:id', articleCtrl.edit);
router.delete('/article/update/:id', articleCtrl.delete);
router.get('/article/show', articleCtrl.show);
router.get('/article/show-nysa', articleCtrl.filter);



module.exports = router;