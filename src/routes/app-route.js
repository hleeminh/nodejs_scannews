//  đi từ index.js(app) ==>
// đi tới =>> importlink-route.js
const articleRouter = require('./article-route');
const detailRouter = require('./detail-route');



function route(app) {
    app.put('/article/update/:id', articleRouter);
    app.delete('/article/update/:id', articleRouter);
    app.get('/article/update/:id', articleRouter);
    app.get('/article/show', articleRouter);
    app.get('/article/import', articleRouter);
    app.post('/article/import', articleRouter);
    app.get('/detail/upload', detailRouter);
    app.post('/detail/upload', detailRouter);



}

module.exports = route;