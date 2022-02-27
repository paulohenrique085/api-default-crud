const mongodb = require('./src/databases/mongodb')

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(routes)

//connecting to the database
mongodb.createConnection()


//going up server
app.listen(process.env.PORT, () => {
    console.log("\033[1;32m -- SERVER RUNNING --  ")
})