//  đi từ inportlink-route.js ==>
const Article = require('../models/Article');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
class ArticleCtrl {
    import_link(req, res) {
        res.render('article/import');
    }

    import (req, res) {
        //   const array = str.split(',');
        const article = new Article(req.body.name.split('\n'));
        article.save()
            // res.send('saved');
            .then(() => res.redirect('show'))
    }
    show(req, res, next) {
        Article.find({})
            .then(articles => {
                res.render('article/show', { articles: multipleMongooseToObject(articles) });
            })
            .catch(next);
    }
    filter(req, res, next) {
        Article.find({ status: 'not scanned yet' })
            .then(articles => {
                res.render('article/show-nysa', { articles: multipleMongooseToObject(articles) });
            })
            .catch(next);
    }
    edit(req, res, next) {
        Article.findById(req.params.id)
            .then(article => res.render('article/update', {
                article: mongooseToObject(article)
            }))
            .catch(next);
    }
    update(req, res, next) {
        Article.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/article/show'))
            .catch(next);
    }
    delete(req, res, next) {
        Article.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new ArticleCtrl();