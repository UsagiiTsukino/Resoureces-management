const express = require('express');
const router = express.Router();

const courseController = require('../src/app/controllers/CourseController');

router.get('/create', courseController.create);

router.get('/:slug', courseController.show);

module.exports = router;
