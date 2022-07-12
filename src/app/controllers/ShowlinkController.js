//  đi từ inportlink-route.js ==>
const Article = require('../models/Article');
const { multipleMongooseToObject } = require('../../util/mongoose');
class HomeController {
    //[GET] /home
    show_link(req, res, next) {
        Article.find({})
            .then(articles => {
                res.render('show-link', { articles: multipleMongooseToObject(articles) });
            })
            .catch(next);
    }
}

module.exports = new HomeController();