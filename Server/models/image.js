const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    Imagetype:{type:String},
    image:{type:String}
})    


module.exports = mongoose.model('image',imageSchema)