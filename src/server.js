const app = require('./app')
const { logger } = require('./loaders/logger')

const port = process.env.APP_PORT || 3333

app.listen(port, () => {
  logger.info(`App running on port ${port}`)
})
