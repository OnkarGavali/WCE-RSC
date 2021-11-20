const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imagetype:{type:String},
    imageURL:{type:String},
    filename:{type:String},
})    


module.exports = mongoose.model('image',imageSchema)