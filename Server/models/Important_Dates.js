const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema({
    Sr_No:{type:Number},
    Date:{type:String},
    Particulars:{type:String}
})

module.exports = mongoose.model('schedule',scheduleSchema)