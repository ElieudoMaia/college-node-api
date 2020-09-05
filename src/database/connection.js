const knex = require('knex')
const config = require('config')

const dbConfig = config.get('database')

const connection = knex(dbConfig)

module.exports = connection