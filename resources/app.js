const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const mongoose = require('mongoose');
const db = require ('./config/db')
const methodOverride = require('method-override')

app.use(express.static(path.join(__dirname, 'public')));

// Connect DB
db.connect();
// HTTP Logger
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'))
// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers : {
            sum: (a,b) => a + b
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src','views'));
// console.log(path.join(__dirname, 'src\\views'))

//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
