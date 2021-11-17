const mongoose = require('mongoose')

const SpeakersSchema = new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    designation:{type:String}
})

const keyNotesSchema = new mongoose.Schema({
    displayNoticeStatus:{type:Boolean},
    displayNoticeHeading:{type:String},
    displayNoticeContent:{type:String},
    maintenanceBreakStatus:{type:Boolean},
    maintenanceBreakHeading:{type:String},
    maintenanceBreakContent:{type:String},
    data:{
        Speakers:[SpeakersSchema]
    }
})

module.exports = mongoose.model('keyNote',keyNotesSchema)