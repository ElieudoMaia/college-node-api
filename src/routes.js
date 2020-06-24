const express = require('express')
const routes = express.Router()
const { celebrate, Joi, Segments } = require('celebrate');

const CourseController = require('./controllers/CourseController')
const StudentController = require('./controllers/StudentController')

// courses' routes
routes.get('/courses', celebrate({
    [Segments.QUERY]: {
        page: Joi.number().optional()
    }
}), CourseController.index)

routes.get('/coursesNoPagination', CourseController.indexNoPagination)

routes.get('/courses/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().length(36).required()
    })
}), CourseController.show)

routes.post('/courses', celebrate({
    [Segments.BODY]: Joi.object().keys({
        course_name: Joi.string().required(),
        duration: Joi.number().integer().max(60).required()
    })
}), CourseController.store)

routes.put('/courses/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        course_name: Joi.string().required(),
        duration: Joi.number().integer().max(60).required()
    }),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().length(36).required()
    })
}), CourseController.update)

routes.delete('/courses/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().length(36).required()
    })
}), CourseController.delete)

// students' routes
routes.get('/students', celebrate({
    [Segments.QUERY]: {
        page: Joi.number().optional()
    }
}), StudentController.index)

routes.get('/students/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().length(36).required()
    })
}), StudentController.show)

routes.post('/students', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        registration: Joi.string().required(),
        course_id: Joi.string().length(36).required()
    })
}), StudentController.store)

routes.put('/students/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        registration: Joi.string().required(),
        course_id: Joi.string().length(36).required()
    }),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().length(36).required()
    })
}), StudentController.update)

routes.delete('/students/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().length(36).required()
    })
}), StudentController.delete)

module.exports = routes
