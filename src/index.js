const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const route = require('./routes/index-route');
const db = require('./config/db');


//Connect to DB
db.connect();

app.use(express.static('./src/public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan('combined'));

app.engine(
    '.hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
    res.render('home')
});
// app.get('/upload-file', (req, res) => {
//     res.render('upload-file')
// });

// route init
//=> đi tới index-route.js
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});