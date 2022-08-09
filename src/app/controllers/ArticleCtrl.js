//  đi từ inportlink-route.js ==>
const Article = require('../models/Article');
const moment = require('moment')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
class ArticleCtrl {
    import_link(req, res) {
        res.render('article/import');
    }

    import (req, res) {
        const arrArticle1 = req.body.url.split('\n');
        const arrArticle2 = req.body.status.split('\n');
        const arrArticle3 = [...arrArticle1, ...arrArticle2];

        for (let element of arrArticle3) {
            Article.create({ url: element, status: element });
        }

        res.redirect('show');

        // const article = new Article(req.body);
        // article.save()
        //     .then(() => res.redirect('show'))
    }
    // show(req, res, next) {
    //     Article.find({})
    //         .then(articles => {
    //             res.render('article/show', { articles: multipleMongooseToObject(articles) });
    //         })
    //         .catch(next);
    // }
    show(req, res, next) {
        Article.find({})
            .then(articles => {
                const data = []
                for (let element of multipleMongooseToObject(articles)) {
                    element.createAt = moment(element.createAt).format('HH:mm:ss DD/MM/YYYY')
                    element.updateAt = moment(element.updateAt).format('HH:mm:ss DD/MM/YYYY')
                    data.push(element)
                }
                res.render('article/show', { articles: data });
            })
            .catch(next);
    }
    filter(req, res, next) {
        Article.find({ status: 'not scanned yet' })
            .then(articles => {
                const data = []
                for (let element of multipleMongooseToObject(articles)) {
                    element.createAt = moment(element.createAt).format('HH:mm:ss DD/MM/YYYY')
                    element.updateAt = moment(element.updateAt).format('HH:mm:ss DD/MM/YYYY')
                    data.push(element)
                }
                res.render('article/show-nysa', { articles: data });
            })
            .catch(next);
    }
    edit_article_form(req, res, next) {
        Article.findById(req.params.id)
            .then(article => res.render('article/edit', {
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