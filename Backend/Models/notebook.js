const mongoose = require('mongoose')
const notesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    dateCreated: {
        type: String,
        default: Date.now().toString()
    },
    tag: {
        type: String,
        default: "General"
    }
})

module.exports = mongoose.model('notes', notesSchema)