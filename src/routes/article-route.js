const express = require('express');
const router = express.Router();
const articleCtrl = require('../app/controllers/ArticleCtrl');

router.get('/article/import', articleCtrl.import_link);
router.post('/article/import', articleCtrl.import);

router.get('/article/edit/:id', articleCtrl.edit_article_form);
router.put('/article/:id', articleCtrl.update);

router.delete('/article/:id', articleCtrl.delete);
router.get('/article/show', articleCtrl.show);
router.get('/article/show-nysa', articleCtrl.filter);



module.exports = router;