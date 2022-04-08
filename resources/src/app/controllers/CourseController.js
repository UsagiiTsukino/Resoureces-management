const courses = require("../models/courses");
const { mongooseToObject } = require('../../util/mongoose');
const { param } = require("express/lib/request");


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
    // [GET] /courses/create
    create(req, res, next){
        res.render('courses/create')
    }

     // [POST] /courses/create
     store(req, res, next){
         const formData = req.body
         req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
         const course = new courses(formData);
         course.save()
                .then(() => res.redirect(`/`))
         
    }

    // [GET] /courses/:id/create
    edit(req, res, next){
        courses.findById(req.params.id)
                .then(course =>  res.render('courses/edit',{
                    course : mongooseToObject(course)
                }))
                .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next){
        courses.updateOne({
            _id : req.params.id
        }, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
    }
    // [DELETE] /courses/:id
    delete(req, res, next){
        courses.deleteOne({
            _id : req.params.id
        })
                .then(() => res.redirect('back') )
                .catch(next)
    }
}
   
module.exports = new CourseController();