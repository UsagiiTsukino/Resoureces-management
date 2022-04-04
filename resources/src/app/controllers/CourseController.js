const courses = require("../models/courses");
const { mongooseToObject } = require('../../util/mongoose');


class CourseController {
  
    // [GET] /search
    show(req, res, next) {
        courses.findOne({
            slug : req.params.slug
        })
        .then(course => {
            res.render('courses/show', {
                course : mongooseToObject(course)
            })
        })
        .catch(next)
    }
    create(req, res, next){
        res.render('courses/create')
    }
}

module.exports = new CourseController();