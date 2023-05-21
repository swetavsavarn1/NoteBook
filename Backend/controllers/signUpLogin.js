const user = require('../Models/userSignup')
const jwt = require('jsonwebtoken')
exports.signUp = async (req, res) => {
    try {
        console.log(req.body)
        const { email } = req.body
        let useralready = await user.findOne({ email })
        if (useralready)
            throw new Error('user already present')
        const userData = new user(req.body)


        await userData.save()
        res.status(200).json({ "message": "Details saved,Now you can login" })
    } catch (error) {
        res.status(400).json({ "message": `${error}` })

    }
}
exports.login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    const userData =await user.findOne({ email }).exec()

    if (!userData)
        res.status(400).json({ "message": "Email is incorrect" })
    else if (password != userData.password)
        res.status(400).json({ "message": "Password is incorrect" })
    else {
        const key = jwt.sign(userData._id.toString(), process.env.SECRET_KEY)
        res.status(200).json({ key })
    }
}
