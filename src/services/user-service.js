//creating services
const User = require('../models/user')

class UserService {

    static async createUser(user) {
        await User.createUser(user)
    }

    static async listUsers() {
        const userList = await User.listUsers()
        return userList
    }

    static async deleteUserByCpf(cpf) {
        await User.deleteUserByCpf(cpf)
    }

    static async updateUser(fullName, age, cpf) {
        return User.updateUser(fullName, age, cpf)
    }


}

module.exports = UserService