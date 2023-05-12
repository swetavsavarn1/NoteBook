const user = require('../Models/userSignup')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')
exports.authorization = async (req, res, next) => {
    if (!req.body?.key) {
        return res.status(400).json({ "message": "You are not login" })
    }
    const parsedKey = jwt.verify(req.body?.key, process.env.SECRET_KEY)
    console.log(parsedKey)
    const userData = await user.findById(new ObjectId(parsedKey)).exec()
    if (!userData)
        return res.status(400).json({ "message": "Not allowed to perform action" })
    else {
        req.user = userData
        next()
    }


}