const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const route = require('./routes/index-route')


app.use(express.static('./src/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// app.use(morgan('combined'));

app.engine('.hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');


// route init 
//=> đi tới index-route.js
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});