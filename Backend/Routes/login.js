const router = require('express').Router()
const { login } = require('../controllers/signUpLogin')
router.get('/', login)
module.exports = router