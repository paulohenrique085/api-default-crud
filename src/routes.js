const express = require('express')
const routes = express.Router()
const UserHandler = require('./handlers/user-handler')



//routes
routes.post('/create-user', UserHandler.createUser)
routes.get('/users', UserHandler.listUsers)
module.exports = routes