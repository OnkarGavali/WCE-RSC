const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')


dotenv.config({path:'./config/config.env'});
connectDB();

const app = express();

app.use(express.json());

app.use('/',require('./routes/auth.js'));

app.listen(5000,() => {
    console.log("Server is Running");
})