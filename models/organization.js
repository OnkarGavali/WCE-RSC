const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: { type: String },
    designation: { type: String },
});

const deptSchema = new mongoose.Schema({
    role:{type:String},
    persons:[personSchema]
});

const organizationSchema = new mongoose.Schema({
  displayNoticeStatus: { type: Boolean },  
  displayNoticeHeading: { type: String },
  displayNoticeContent: { type: String },
  maintenanceBreakStatus: { type: Boolean },
  maintenanceBreakHeading: { type: String },
  maintenanceBreakContent: { type: String },
  organsingList: [
       deptSchema
  ]
});

module.exports = mongoose.model("organization", organizationSchema);