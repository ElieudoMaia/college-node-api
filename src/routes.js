const express = require('express')
const routes = express.Router()

const CourseController = require('./controllers/CourseController')
const StudentController = require('./controllers/StudentController')

routes.get('/courses', CourseController.index)
routes.get('/courses/:id', CourseController.show)
routes.post('/courses', CourseController.store)
routes.put('/courses/:id', CourseController.update)
routes.delete('/courses/:id', CourseController.delete)

routes.get('/students', StudentController.index)
routes.get('/students/:id', StudentController.show)
routes.post('/students', StudentController.store)
routes.put('/students/:id', StudentController.update)
routes.delete('/students/:id', StudentController.delete)

module.exports = routes
