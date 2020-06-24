const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate');

const routes = require('./routes')

const app = express()

app.use(cors({
    exposedHeaders: ['x-total-count', 'x-total-pages']
}))
app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(3333)