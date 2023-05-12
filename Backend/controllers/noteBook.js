const notes = require('../Models/notebook')
exports.allNotes = async (req, res) => {
    const notesData = await notes.find({ userId: req.user._id.toString() })
    res.status(200).json({ "data": notesData })
}
exports.postNotes = async (req, res) => {
    let { title, description = '', tag = '' } = req.body
    const notesData = new notes({ title, description, tag })
    notesData.userId = req.user._id.toString()
    await notesData.save()
    res.status(200).json({ "message": "saved" })
}