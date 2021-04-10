var  express = require('express');

var path = require('path');

var  consign = require('consign');
var  bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

consign()
    .include('routes')
    .into(app);


module.exports = app;

