const newsRouter = require('./news');
const coursesRouter = require('./courses');
const model = require('../src/app/models/courses')
const siteRouter = require('./site');
function route(app) {
    app.use('/courses', coursesRouter)
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

}

module.exports = route;
