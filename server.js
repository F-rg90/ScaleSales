require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;
const sale= require('./models/sales');



//database//
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
    console.log('Mango Good')
  })



app.listen(PORT, () => {
    console.log('we outside', PORT)
    })
    