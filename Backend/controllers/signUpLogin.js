const user = require('../Models/userSignup')
const jwt = require('jsonwebtoken')
exports.signUp = async (req, res) => {
    try {
        const { email, Name, password } = req.body
        const userData = new user(req.body)
        let useralready = await user.findOne({ email: req.body.email })
        if (useralready)
            throw new Error('user already present')

        await userData.save()
        res.status(200).json({ "message": "done" })
    } catch (error) {
        res.status(400).json({ "message": `${error}` })

    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body
    const userData =await user.findOne({ email }).exec()
    console.log(userData)
    if (!userData)
        res.status(400).json({ "message": "Email is incorrect" })
    else if (password != userData.password)
        res.status(400).json({ "message": "Password is incorrect" })
    else {
        const key = jwt.sign(userData._id.toString(), process.env.SECRET_KEY)
        res.status(200).json({ key })
    }
}
