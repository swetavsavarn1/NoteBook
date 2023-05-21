const router = require('express').Router()
const { login } = require('../controllers/signUpLogin')
router.post('/', login)
module.exports = router