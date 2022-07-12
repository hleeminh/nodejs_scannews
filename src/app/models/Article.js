const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
    url: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    status: { type: String, maxLength: 255 },
});

module.exports = mongoose.model('Article', Article);