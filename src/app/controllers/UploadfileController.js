class UploadfileController {
    upload_file(req, res) {
        res.render('upload-file');
    }

    // import (req, res, str) {

    //     //   const array = str.split(',');
    //     const article = new Article(req.body);
    //     article.save()
    //         // res.send('saved');
    //         .then(() => res.redirect('/show-link'))
    // }

}

module.exports = new UploadfileController();