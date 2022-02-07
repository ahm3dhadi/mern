const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const userRouter = require('../routes/userRouter');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV !== 'production') app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routers

app.use('/user', userRouter);

// ---------
module.exports = app;
