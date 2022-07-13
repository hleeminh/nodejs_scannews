  //  đi từ importlink-route.js ==>
  const Article = require('../models/Article');
  class ImportlinkController {
      import_link(req, res) {
          res.render('import-link');
      }

      import (req, res, str) {

          //   const array = str.split(',');
          const article = new Article(req.body);
          article.save()
              // res.send('saved');
              .then(() => res.redirect('/show-link'))
      }

  }

  module.exports = new ImportlinkController();