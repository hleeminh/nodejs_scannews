//  đi từ index.js(app) ==>
// đi tới =>> importlink-route.js
const importlinkRouter = require('./importlink-route');
const showlinkRouter = require('./showlink-route');
const uploadfileRouter = require('./uploadfile-route');


function route(app) {

    app.get('/show-link', showlinkRouter);
    app.get('/import-link', importlinkRouter);
    app.post('/import-link', importlinkRouter);
    app.get('/upload-file', uploadfileRouter);


}

module.exports = route;