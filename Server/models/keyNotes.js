const mongoose = require('mongoose')

const keyNotesSchema = new mongoose.Schema({
    Sr_No:{type:Number},
    Name:{type:String},
    Designation:{type:String}
})


module.exports = mongoose.model('keyNote',keyNotesSchema)