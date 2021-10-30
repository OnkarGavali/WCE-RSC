const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors');




dotenv.config({path:'./config/config.env'});
// console.log(process.env);
connectDB();

const app = express();

app.use(
    cors({
        origin:"http://localhost:3000"
    })
);

app.use(express.json());

app.use('/auth',require('./routes/auth.js'));
app.use('/post',require('./routes/PostRoutes.js'));
app.use('/get',require('./routes/GetRoutes.js'))
app.use('/delete',require('./routes/DeleteRoutes.js'))

app.listen(process.env.PORT,() => {
    console.log("Server is Running on port " + process.env.PORT );
})