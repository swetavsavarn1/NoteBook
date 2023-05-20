const notes = require('../Models/notebook')
const { ObjectId } = require('mongodb')
exports.allNotes = async (req, res) => {
    const notesData = await notes.find({ userId: req.user._id.toString() })
    res.status(200).json({ "data": notesData })
}
exports.postNotes = async (req, res) => {
    try {
        let { note = '', createdOn = Date.now().toString() } = req.body
        if (note == '') {
            res.status(400).json({ "message": "Cannot save empty note" })
            return
        }

        const notesData = new notes({ note, createdOn })
        notesData.userId = req.user._id.toString()
        await notesData.save()
        res.status(200).json({ "message": "Notes Saved. Thanks for using Notebook" })
    } catch (error) {
        console.log('Error from saving notes', error)
        res.status(400).json({ "message": "Something Went Wrong" })

    }
}
exports.editNotes = async (req, res) => {
    let { title, description = '', tag = '' } = req.body
    const updatedNotes = await notes.findOneAndUpdate({ _id: new ObjectId(req.params.id) }, { title, description, tag, modifiedOn:  Date.now().toString() }, { returnOriginal: true }).exec()
    res.status(200).json({ "data": updatedNotes })
}
exports.deleteNotes = async (req, res) => {
    await notes.deleteOne({ _id: new ObjectId(req.params.id) })
    res.status(200).json({ "message": "ok" })

}