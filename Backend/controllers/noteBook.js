const notes = require('../Models/notebook')
const { ObjectId } = require('mongodb')
exports.allNotes = async (req, res) => {
    const notesData = await notes.find({ userId: req.user._id.toString() })
    res.status(200).json({ "data": notesData })
}
exports.postNotes = async (req, res) => {
    let { title, description = '', tag = '', createdOn =  Date.now().toString() } = req.body
    const notesData = new notes({ title, description, tag, createdOn })
    notesData.userId = req.user._id.toString()
    await notesData.save()
    res.status(200).json({ "message": "saved" })
}
exports.editNotes = async (req, res) => {
    let { title, description = '', tag = '' } = req.body
    const updatedNotes = await notes.findOneAndUpdate({ _id: new ObjectId(req.params.id) }, { title, description, tag, modifiedOn:  Date.now().toString() }, { returnOriginal: true }).exec()
    res.status(200).json({ "data": updatedNotes })
}