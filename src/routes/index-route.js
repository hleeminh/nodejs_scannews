//  đi từ index.js(app) ==>
// đi tới =>> importlink-route.js
const importlinkRouter = require('./article-route/importlink-route');
const showlinkRouter = require('./article-route/showlink-route');
const uploadfileRouter = require('./detail-route/uploadfile-route');



function route(app) {
    app.put('/article/edit-link/:id', showlinkRouter);
    app.delete('/article/edit-link/:id', showlinkRouter);
    app.get('/article/edit-link/:id', showlinkRouter);
    app.get('/article/show-link', showlinkRouter);
    app.get('/article/import-link', importlinkRouter);
    app.post('/article/import-link', importlinkRouter);
    app.get('/detail/upload-file', uploadfileRouter);
    app.post('/detail/upload-file', uploadfileRouter);



}

module.exports = route;