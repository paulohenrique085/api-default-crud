const UserService = require('../services/user-service')

class UserHandler {

    static async listUsers(req, res) {

    }

    static async createUser(req, res) {
        const user = req.body

        try {
            await UserService.createUser(user)
            res.status(200).json({ message: "User registered successfully" })

        } catch (error) {
            res.status(400).json({ message: "Error when registering user" })
        }

    }

    static async listUserById(req, res) {

    }

    static async deleteUserByCpf(req, res) {

    }
}

module.exports = UserHandler