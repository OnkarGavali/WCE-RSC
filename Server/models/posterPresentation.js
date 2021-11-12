const mongoose = require('mongoose')

const posterPresentationSchema = new mongoose.Schema({
    displayNoticeStatus:{type:Boolean},
    displayNoticeHeading:{type:String},
    displayNoticeContent:{type:String},
    maintenanceBreakStatus:{type:Boolean},
    maintenanceBreakHeading:{type:String},
    maintenanceBreakContent:{type:String},
    data:{
        sizeAndLayout:{type:String},
        organisationOfIdeas:{type:String},
        format:{type:String},
        presentation:{type:String},
    }
})

module.exports = mongoose.model('posterPresentation',posterPresentationSchema);