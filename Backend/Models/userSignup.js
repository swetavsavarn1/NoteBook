const mongoose = require('mongoose')
const signUPchema = new Schema({
    Name: {
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