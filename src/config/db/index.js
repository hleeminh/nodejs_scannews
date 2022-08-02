const mongoose = require('mongoose');
async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/vnpt_scanwebtool_dev')
            // await mongoose.connect('mongodb://localhost:27017/vnpt_scanwebtool_dev', (err, client) => {
            //     if (err) return console.log(err)
            //     const db = client.db('vnpt_scanwebtool_dev');
            // });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failue!!!');
    };
}

module.exports = { connect };