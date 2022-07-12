const mongoose = require('mongoose');
async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/vnpt_scanwebtool_dev');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failue!!!');
    };
}

module.exports = { connect };