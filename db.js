require('dotenv').config()

const env = process.env.NODE_ENV || "development"

const knexfile = require('./knexfile')
module.exports = require('knex')(env)