const mongoose = require('mongoose')

const dateSchema = new mongoose.Schema({
    id:{type:Number},
    impDate:{type:String},
    details:{type:String}
})    

const datesSchema = new mongoose.Schema({
    displayNoticeStatus:{type:Boolean},
    displayNoticeHeading:{type:String},
    displayNoticeContent:{type:String},
    maintenanceBreakStatus:{type:Boolean},
    maintenanceBreakHeading:{type:String},
    maintenanceBreakContent:{type:String},
    data:{
        dates:[dateSchema]
    }
})



module.exports = mongoose.model('dates',datesSchema)