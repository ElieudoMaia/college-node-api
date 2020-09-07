const request = require('supertest')
const { assert } = require('chai')
const app = require('../src/app.js')

describe('GET /courses', () => {
    it('should list all courses with a object Array', async () => {
        
        const { body } = await request(app)
            .get('/courses')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)

        assert.typeOf(body, 'Array')
        assert.property(body[0], 'id', 'ID property is not present on object')

    })
})