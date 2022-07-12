//  đi từ index.js(app) ==>
// đi tới =>> importlink-route.js
const importlinkRouter = require('./importlink-route');
const showlinkRouter = require('./showlink-route');
const linkRouter = require('./link-route');

function route(app) {

    app.get('/show-link', showlinkRouter);
    app.get('/import-link', importlinkRouter);
    app.post('/link', linkRouter);


}

module.exports = route;