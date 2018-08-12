const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/test');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
    return res.send('pong');
})

app.get('/', (req, res) => {
   return res.send('yes this works');
})


app.listen(process.env.PORT || 8080);