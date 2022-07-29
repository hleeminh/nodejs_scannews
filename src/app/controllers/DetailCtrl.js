const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const Detail = require('../models/Detail');
// const Detail = fs.readFileSync('City.json');
// const detail = JSON.parse(Detail);
// const reader = new FileReader();
// // const fileUpload = document.querySelector("#file-upload");

// const fileUpload = document.getElementById('file-upload');
// const viewFormUpload = fs.readFileSync('../detail/upload');

class DetailCtrl {
    upload_file(req, res) {
            res.render('detail/upload');
        }
        // upload(req, res, next) {
        //     fileUpload.addEventListener('change', (event) => {
        //         const files = event.target.files;

    //         reader.readAsDataURL(files[0])

    //         reader.addEventListener('load', (event) => {
    //             const url = event.target.results

    //             document.getElementById('file-upload').src = URL.createObjectURL(url);
    //         })
    //     })
    //     const detail = new Detail(req.body);
    //     detail.save()
    //         .then(() => res.redirect('detail/upload'))
    //         .catch(next);
    // }


    // upload(req, res) {
    //     if (req.url == '/detail/upload') {
    //         const detail = new Detail(req.body);
    //         detail.save()
    //             .then(() => res.redirect('/'))
    //         var form = new formidable.IncomingForm();
    //         form.parse(req, function(err, fields, files) {
    //             var oldpath = files.filetoupload.filepath;
    //             var newpath = 'C:/Users/Nhin cc/' + files.filetoupload.originalFilename;
    //             fs.rename(oldpath, newpath, function(err) {
    //                 if (err) throw err;
    //                 res.write('File uploaded and moved!');
    //                 res.end();
    //             });
    //         });
    //     }

    // }
}

module.exports = new DetailCtrl();