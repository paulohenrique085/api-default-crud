const UserService = require('../services/user-service')

class UserHandler {

    static async createUser(req, res) {
        const credentials = req.body

        try {
            await UserService.createUser(credentials)
            res.status(200).json({ message: "User registered successfully" })

        } catch (error) {
            res.status(400).json({ message: "Error when registering user" })
        }

    }

    static async listUsers(req, res) {

        try {
            const users = await UserService.listUsers()
            res.status(200).json(users)

        } catch (error) {

            res.status(400).json({ message: "Error listing users" })
        }

    }
    static async deleteUserByCpf(req, res) {
        const cpf = req.body

        try {

            await UserService.deleteUserByCpf(cpf)
            res.status(200).json(`user deleted successfully`)

        } catch (error) {

            res.status(400).json({ message: "Error deleting user" })
        }


    }


}

module.exports = UserHandler