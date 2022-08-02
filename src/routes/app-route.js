//  đi từ index.js(app) ==>
// đi tới =>> importlink-route.js
const articleRouter = require('./article-route');
const detailRouter = require('./detail-route');



function route(app) {
    app.put('/article/:id', articleRouter);
    app.delete('/article/:id', articleRouter);
    app.get('/article/edit/:id', articleRouter);

    app.get('/article/show', articleRouter);
    app.get('/article/show-nysa', articleRouter);

    app.get('/article/import', articleRouter);
    app.post('/article/import', articleRouter);

    app.get('/detail/upload', detailRouter);
    app.post('/detail/upload', detailRouter);
    app.delete('/detail/:id', detailRouter);
    app.get('/detail/show-detail', detailRouter);




}

module.exports = route;