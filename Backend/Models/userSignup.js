const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const signUPchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('signUp', signUPchema)