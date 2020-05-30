const { v4: uuidv4 } = require('uuid')

const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query

        const [count] = await connection('students').count()

        const students = await connection('students')
            .join('courses', 'courses.id', '=', 'students.course_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['students.*', 'courses.course_name'])

        response.header('X-Total-Count', count['count(*)'])

        return response.json(students)
    },

    async show(request, response) {
        const { id } = request.params
        const student = await connection('students').where('id', id).select('*').first()
        return response.json(student)
    },

    async store(request, response) {
        const { name, registration, course_id } = request.body
        const id = uuidv4()

        await connection('students').insert({
            id,
            name,
            registration,
            course_id
        })

        return response.json({ id, name, registration, course_id })

    },

    async update(request, response) {
        const { id } = request.params
        const { name, registration, course_id } = request.body
        await connection('students').where('id', id).update({
            name,
            registration,
            course_id
        })
        
        return response.json({ id })
        
    },

    async delete(request, response) {
        const { id } = request.params
        await connection('students').where('id', id).delete()
        return response.status(204).send()
    }

}