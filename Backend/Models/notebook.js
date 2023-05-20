const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const notesSchema = new Schema({
    note: {
        type: String
    },
    createdOn: {
        type: String,
    },
    modifiedOn: {
        type: String
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('notes', notesSchema)