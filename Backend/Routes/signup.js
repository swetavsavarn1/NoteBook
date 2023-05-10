
const express = require('express')
const router = express.Router()
const { signUp } = require('../controllers/signUpLogin')

router.post('/', signUp)

module.exports = router