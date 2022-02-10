//creating database connection

const mongoose = require('mongoose')
require('dotenv').config({ path: 'env/.env' })
class MongoDB {
    static createConnection() {
        mongoose.connect(process.env.MONGO_DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log('MongoDB connected successfull !!')
            }
        })
    }

}

module.exports = MongoDB