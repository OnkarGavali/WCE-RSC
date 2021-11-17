const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    id:{type:Number},
    topicName:{type:String}
})    

const contributionTopicsSchema = new mongoose.Schema({
    displayNoticeStatus:{type:Boolean},
    displayNoticeHeading:{type:String},
    displayNoticeContent:{type:String},
    maintenanceBreakStatus:{type:Boolean},
    maintenanceBreakHeading:{type:String},
    maintenanceBreakContent:{type:String},
    data:{
        paragraph:{type:String},
        topicList:[topicSchema]
    }
})



module.exports = mongoose.model('contributionTopics',contributionTopicsSchema)