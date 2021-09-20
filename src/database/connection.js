const knex = require('knex')
const config = require('config')
const { logger } = require('../loaders/logger')

const dbConfig = config.get('database')

const dbConnection = knex(dbConfig)

dbConnection.raw('SELECT 1').then(() => {
  logger.info('Database connected');
})
.catch((e) => {
  logger.error(`Database error: ${e.message}`);
});

module.exports = dbConnection
