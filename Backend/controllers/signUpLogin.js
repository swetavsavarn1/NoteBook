const user = require('../Models/userSignup')
exports.signUp = async (req, res) => {
    try {
        const { email, Name, password } = req.body
        const userData = new user(req.body)
        let useralready = await user.findOne({ email: req.body.email })
        if (useralready)
            throw new Error('user already present')

        await userData.save()
        // user.insertMany([{ email, Name, password }])
        res.status(200).json({ "message": "done" })
    } catch (error) {
        res.status(400).json({ "message": `${error}` })

    }
}

