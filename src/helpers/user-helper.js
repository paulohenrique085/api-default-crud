const User = require('../models/user')

class UserHelper {

    static async checkUserInDatabase(cpf) {

        const user = await User.checkUserExistence(cpf)

        if (!user) {
            return false
        }
        return true

    }

}
module.exports = UserHelper