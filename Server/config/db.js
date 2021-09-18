const mongoose = require('mongoose');

const connectDB = async () => {
    try{
    const conn = await mongoose.connect('mongodb+srv://shreyash:shreyash@cluster0.1t8zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
    // console.log(process.env.MONGO_URI);
    console.log(`MongoDB connected:${conn.connection.host}`);
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}
module.exports = connectDB;