

class CourseController {
  
    // [GET] /search
    show(req, res) {
        res.send('Course Detail')
    }
}

module.exports = new CourseController();