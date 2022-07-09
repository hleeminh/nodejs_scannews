const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');


app.use(express.static('./src/public'));

// app.use(morgan('combined'));

app.engine('.hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/upload-file', (req, res) => {
    res.render('upload-file');
});

app.get('/import-link', (req, res) => {
    console.log(req.query.link);
    res.render('import-link');

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});