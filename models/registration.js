const mongoose = require('mongoose')

const registrationTypeSchema = new mongoose.Schema({
    id:{type:Number},
    type:{type:String},
    fees:{type:String},
    late:{type:String}
})

const waiverSchema = new mongoose.Schema({
    text:{type:String},
    link:{type:String},
})

const bankDetails = new mongoose.Schema({
    accountNo:{type:String},
    accountName:{type:String},
    nameOfBank:{type:String},
    IFSCCode:{type:String},
    MICRCode:{type:String},
    branchCode:{type:String},
})

const registrationSchema = new mongoose.Schema({
    displayNoticeStatus:{type:Boolean},
    displayNoticeHeading:{type:String},
    displayNoticeContent:{type:String},
    maintenanceBreakStatus:{type:Boolean},
    maintenanceBreakHeading:{type:String},
    maintenanceBreakContent:{type:String},
    data:{
        note:{type:String},
        regitrationFees:[registrationTypeSchema],
        feeWaiver:[waiverSchema],
        feeWaiverNotice:{type:String},
        bankDetails:bankDetails,
        regitrationFormLink:{type:String}
    }
})

module.exports = mongoose.model('registration',registrationSchema)