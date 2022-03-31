const newsRouter = require('./news');
const model = require('../src/app/models/courses')
function route(app) {
    app.use('/news', newsRouter);

    app.get('/', (req, res) => {
        model.find({}, (err, courses) => {
            if (!err) res.json(courses)
            else res.status(400).json({
                error : "Error Message"
            })
        })
    });

    // app.get('/news', (req, res) => {
    //   res.render('news')
    // })

    app.get('/search', (req, res) => {
        console.log(req.query);
        res.render('search');
    });

    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send(`<h1>${req.body}</h1>`);
    });
}

module.exports = route;
