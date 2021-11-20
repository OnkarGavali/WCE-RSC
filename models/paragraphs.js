const mongoose = require('mongoose')

const paragraphSchema = new mongoose.Schema({
    id:{type:Number},
    HomeParagraph:{type:String},
    FooterParagraph:{type:String}
})

module.exports = mongoose.model('paragraph',paragraphSchema);