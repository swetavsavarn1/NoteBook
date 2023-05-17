const Router = require('express').Router()
const { allNotes, postNotes, editNotes, deleteNotes } = require('../controllers/noteBook')
const { authorization } = require('../controllers/authorization')

Router.get('/get', authorization, allNotes)
Router.post('/post', authorization, postNotes)
Router.post('/edit/:id', authorization, editNotes)
Router.post('/delete/:id', authorization, deleteNotes)

module.exports = Router