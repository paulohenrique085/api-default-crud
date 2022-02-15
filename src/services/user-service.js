//creating services
const User = require('../models/user')
class UserService {

    static async listUsers() {

    }

    static async createUser(event) {
        await User.createUser(event)

    }

    static async listUserById() {

    }

    static async deleteUserByCpf() {

    }

}

module.exports = UserService