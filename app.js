// imports
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const authRoutes = require('./routes/auth');

// DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB CONNECTED');
}).catch(() => {
    console.log('DB GOT OOPPSSS');
});

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My routes
app.use('/api', authRoutes);

// port number comming from .env
const port = process.env.PORT || 8000;

// starting the server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});