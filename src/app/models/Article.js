const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const customDate = moment().format('dddd HH:mm:ss DD/MM/YYYY');
mongoose.Schema.Types.customDate = customDate;


const Article = new Schema({
    url: { type: String, maxLength: 255 },
    createAt: { type: String, default: customDate },
    updateAt: { type: String, default: customDate },
    // createAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now },

    status: { type: String, maxLength: 255 },
});

module.exports = mongoose.model('Article', Article);