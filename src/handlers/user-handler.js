const UserService = require('../services/user-service')
const UserHelper = require('../helpers/user-helper')

class UserHandler {

    static async createUser(req, res) {
        const credentials = req.body
        const { cpf } = req.body

        const userExistence = await UserHelper.checkUserInDatabase(cpf)

        if (userExistence) {
            res.status(400).json({ message: "The user already exists in our database" })
        }

        else {
            try {
                await UserService.createUser(credentials)
                res.status(200).json({ message: "User registered successfully" })

            } catch (error) {
                res.status(500).json({ message: "Error when registering user" })
            }
        }
    }


    static async listUsers(req, res) {

        try {
            const users = await UserService.listUsers()
            res.status(200).json(users)

        } catch (error) {

            res.status(500).json({ message: "Error listing users" })
        }

    }


    static async deleteUserByCpf(req, res) {
        const { cpf } = req.body

        const userExistence = await UserHelper.checkUserInDatabase(cpf)

        if (!userExistence) {
            res.status(400).json({ message: "The user does not exist in our database" })
        }

        else {

            try {
                await UserService.deleteUserByCpf(cpf)
                res.status(200).json("User deleted successfully")

            } catch (error) {

                res.status(500).json({ message: "Error deleting user" })

            }
        }
    }

    static async updateUser(req, res) {
        const { fullName, age, cpf } = req.body


        const userExistence = await UserHelper.checkUserInDatabase(cpf)

        if (!userExistence) {
            res.status(400).json({ message: "The user does not exist in our database" })
        }

        else {
            try {
                await UserService.updateUser(fullName, age, cpf)
                res.status(200).json("User successfully updated")
            } catch (error) {
                res.status(500).json({ message: "Error deleting user" })
            }
        }

    }


}

module.exports = UserHandler