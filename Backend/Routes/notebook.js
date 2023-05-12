const Router = require('express').Router()
const { allNotes, postNotes } = require('../controllers/noteBook')
const { authorization } = require('../controllers/authorization')

Router.get('/get', authorization, allNotes)
Router.post('/post', authorization, postNotes)

module.exports = Router