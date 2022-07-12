const Article = require("../models/Article");

class LinkController {
    //[GET] /home

    link(req, res) {

        // res.json(req.body);

        const article = new Article(req.body);
        article.save()
            // res.send('saved');
            .then(() => res.redirect('/show-link'))

    }
}

module.exports = new LinkController();