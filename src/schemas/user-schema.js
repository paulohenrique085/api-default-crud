// defining the schema to be modeled
const { Schema } = require('mongoose')

module.exports = Schema({
    fullName: {
        type: String,
        default: null
    },
    age: {
        type: String,
        default: null
    },
    cpf: {
        type: String,
        default: null
    },

    disabled: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date
    }
})