const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const notesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    createdOn: {
        type: String,
    },
    modifiedOn: {
        type: String
    },
    tag: {
        type: String,
        default: "General"
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('notes', notesSchema)