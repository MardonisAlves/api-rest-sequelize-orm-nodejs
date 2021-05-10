var  express = require('express');
var  consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('../config/cors')
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors)


consign()
    .include('routes')
    .into(app);


module.exports = app;

