const mongoose = require('mongoose')

//importing schema
const userSchema = require('../schemas/user-schema')

//creating the model in the database according to the imported schema
const User = mongoose.model('User', userSchema, 'users')


User.createUser = user => {
    return User.create(user)
}
User.listUsers = () => {
    return User.find().lean()
}
User.deleteUserByCpf = (cpf) => {
    return User.findOneAndDelete({ cpf })
}
User.checkUserExistence = (cpf) => {
    return User.findOne({ cpf }).lean()
}

User.updateUser = (fullName, age, cpf) => {
    return User.findOneAndUpdate({ cpf: cpf }, { fullName: fullName, age: age }, { new: true })
}



module.exports = User