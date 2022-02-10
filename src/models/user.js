const mongoose = require('mongoose')

//importing schema
const userSchema = require('../schemas/user-schema')

//creating the model in the database according to the imported schema
const User = mongoose.model('User', userSchema, 'users')


User.modelInsertUser = object => {
    return User.create(object)
}


module.exports = User