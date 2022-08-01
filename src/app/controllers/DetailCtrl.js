const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const db = require('./config/db');
const Detail = require('../models/Detail');

class DetailCtrl {

    upload_file(req, res) {
        res.render('detail/upload');
    }

    upload(req, res, next) {
        var json = fs.readFileSync(req.file.path);
        const file = req.file;
        // res.send(file);
        db.collection('details').insertOne(json);
        // const arrDetail = req.body;
        // for (let el of arrDetail) {
        //     Detail.insertOne(el, json);
        // }
        res.redirect('back');
    }
}

module.exports = new DetailCtrl();