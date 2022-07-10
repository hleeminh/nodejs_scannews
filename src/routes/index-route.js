//  đi từ index.js(app) ==>
// đi tới =>> importlink-route.js
const importlinkRouter = require('./importlink-route');
const homeRouter = require('./home-route');

function route(app) {

    app.use('/import-link', importlinkRouter);
    app.use('/', homeRouter);
    app.get('/upload-file', (req, res) => {
        res.render('upload-file');
    });


    // app.post('/import-link', (req, res) => {
    //     console.log(req.body.link);
    //     res.render('import-link');
    // });

}

module.exports = route;