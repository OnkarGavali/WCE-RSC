const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')


dotenv.config({path:'./config/config.env'});
// console.log(process.env);
connectDB();

const app = express();

console.log(process.env.NODE_ENV);


app.use(
    cors({
        origin:"http://localhost:3000"
    })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads',express.static('uploads'));

app.use('/auth',require('./routes/auth.js'));
app.use('/post',require('./routes/PostRoutes.js'));
app.use('/get',require('./routes/GetRoutes.js'))
app.use('/delete',require('./routes/DeleteRoutes.js'))
app.use('/put',require('./routes/updateRoutes.js'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname ,'/client/build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT,() => {
    console.log("Server is Running on port " + process.env.PORT );
})