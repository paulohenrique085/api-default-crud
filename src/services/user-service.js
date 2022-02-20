//creating services
const User = require('../models/user')

class UserService {

    static async createUser(credentials) {

        await User.createUser(credentials)
    }

    static async listUsers() {
        const userList = await User.listUsers()
        return userList
    }

}

module.exports = UserService