const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({
    name:{type:String}
});

const advisorySchema = mongoose.Schema({
    displayNoticeStatus:{type:Boolean},
    displayNoticeHeading:{type:String},
    displayNoticeContent:{type:String},
    maintenanceBreakStatus:{type:Boolean},
    maintenanceBreakHeading:{type:String},
    maintenanceBreakContent:{type:String},
    advisoryList:[nameSchema]
});

module.exports = mongoose.model("advisory", advisorySchema);