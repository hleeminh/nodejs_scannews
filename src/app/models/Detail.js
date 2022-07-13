const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Detail = new Schema({
    id: String,
    name: String,
    baseUrl: String,
    type: Int32,
    ruleList: String,
    urlSeeds: Array,
    deep: Int32,
    patternDeep: Array,
    patternCrawler: Array,
    docType: String,
    rank: Int32,
    category: String,
    fields: Array,
    province: String,


});

module.exports = mongoose.model('Detail', Detail);