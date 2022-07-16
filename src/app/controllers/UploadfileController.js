const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const Detail = require('../models/Detail');
// let Detail = fs.readFileSync('City.json');
// let details = JSON.parse(Detail);
class UploadfileController {
    upload_file(req, res) {
        res.render('upload-file');
    }

    upload(req, res) {
        if (req.url == '/upload-file') {
            const detail = new Detail(req.body);
            detail.save()
                .then(() => res.redirect('/'))
            var form = new formidable.IncomingForm();
            form.parse(req, function(err, fields, files) {
                var oldpath = files.filetoupload.filepath;
                var newpath = 'C:/Users/Nhin cc/' + files.filetoupload.originalFilename;
                fs.rename(oldpath, newpath, function(err) {
                    if (err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
                });
            });
        }

    }
}

module.exports = new UploadfileController();