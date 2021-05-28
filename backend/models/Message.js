const { Schema, model, ObjectId } = require('mongoose')

const messageSchema = new Schema({
    input: String,
    from: { type: Schema.Types.ObjectId, ref: 'User' },
    date: String,
})

module.exports = model('Message', messageSchema)