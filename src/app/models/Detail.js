const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Detail = new Schema({
    id: String,
    name: String,
    baseUrl: String,
    type: Intl,
    ruleList: String,
    urlSeeds: Array,
    deep: Intl,
    patternDeep: Array,
    patternCrawler: Array,
    docType: String,
    rank: Intl,
    category: String,
    fields: Array,
    province: String,


});

module.exports = mongoose.model('Detail', Detail);