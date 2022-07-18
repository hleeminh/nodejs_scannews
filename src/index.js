const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const route = require('./routes/index-route');
const db = require('./config/db');
const methodOverride = require('method-override')


//Connect to DB
db.connect();

app.use(express.static('./src/public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));

// app.use(morgan('combined'));

app.engine(
    '.hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');


app.get('/', (req, res) => {
    res.render('home')
});


// route init
//=> đi tới index-route.js
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});