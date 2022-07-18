//  đi từ inportlink-route.js ==>
const Article = require('../../models/Article');
const { multipleMongooseToObject, mongooseToObject } = require('../../../util/mongoose');
class HomeController {
    //[GET] /home
    show_link(req, res, next) {
        Article.find({})
            .then(articles => {
                res.render('article/show-link', { articles: multipleMongooseToObject(articles) });
            })
            .catch(next);
    }
    edit(req, res, next) {
        Article.findById(req.params.id)
            .then(article => res.render('article/edit-link', {
                article: mongooseToObject(article)
            }))
            .catch(next);
    }
    update(req, res, next) {
        Article.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/article/show-link'))
            .catch(next);
    }
    delete(req, res, next) {
        Article.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new HomeController();