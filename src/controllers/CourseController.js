const { v4: uuidv4 } = require('uuid')

const connection = require('../database/connection')


module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query

        const [count] = await connection('courses').count()

        response.header('X-Total-Count', count['count(*)'])

        const totalPages = Math.ceil(count['count(*)'] / 5)
        response.header('X-Total-Pages', totalPages)

        const courses = await connection('courses')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*')

        return response.json(courses)
    },

    async indexNoPagination(request, response) {
        const courses = await connection('courses')
            .select('*')

        return response.json(courses)
    },

    async show(request, response) {
        const { id } = request.params

        const course = await connection('courses')
            .where('id', id)
            .select('*')
            .first()

        return response.json(course)
    },

    async store(request, response) {
        const { course_name, duration } = request.body
        const id = uuidv4()
    
        await connection('courses').insert({
            id,
            course_name,
            duration
        })
    
        return response.json({ id, course_name, duration })
    },

    async update(request, response) {
        const { course_name, duration } = request.body
        const { id } = request.params

        await connection('courses')
            .where('id', id)
            .update({
                course_name,
                duration
            })

        return response.json({ course_name, duration })
    },

    async delete(request, response) {
        const { id } = request.params

        await connection('courses')
            .where('id', id)
            .delete()

        return response.status(204).send()
    }

}