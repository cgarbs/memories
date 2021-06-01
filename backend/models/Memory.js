const { Schema, model, ObjectId } = require('mongoose')

const memorySchema = new Schema({
    name: String,
    startDate: String,
    endDate: String
})

module.exports = model('Memory', memorySchema)