const Course = require("../models/courses");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const courses = require("../models/courses");

class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    courses.find({deletedAt: null})
        .then(courses => 
            res.render('me/stored-courses', {
                courses : mutipleMongooseToObject(courses),
            }))
        .catch(next)
  }
}

module.exports = new MeController();
