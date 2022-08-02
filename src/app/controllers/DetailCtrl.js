const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const db = require('../../config/db');
const Detail = require('../models/Detail');
const mongoose = require('mongoose');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class DetailCtrl {

    upload_file(req, res) {
        res.render('detail/upload');
    }

    upload(req, res, next) {
        var json = fs.readFileSync(req.file.path);
        Detail.create(JSON.parse(json.toString())[0])
            // Detail.findOneAndUpdate({ id: req.params.id }, { upsert: true })
        res.redirect('show-detail')
    }
    show_detail(req, res, next) {
        Detail.find({})
            .then(details => {
                res.render('detail/show-detail', { details: multipleMongooseToObject(details) });
            })
            .catch(next);
    }
    delete(req, res, next) {
        Detail.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}


module.exports = new DetailCtrl();