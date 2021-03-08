const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//Middleware
app.use(bodyParser.json());

//Allow cross domain
app.use(cors());

//Import Routes
const postionsRoute = require('./routes/positions');
app.use('/positions', postionsRoute);

//Connect to Database
mongoose.connect(
    process.env.DB_CONNECTION, {useUnifiedTopology: true}, ()=> {
    console.log('Connected to Positions DB!')
})

app.listen(3000);
