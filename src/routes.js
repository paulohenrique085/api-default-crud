const express = require('express')
const routes = express.Router()
const UserHandler = require('./handlers/user-handler')



//routes
routes.post('/create-user', UserHandler.createUser)

module.exports = routes