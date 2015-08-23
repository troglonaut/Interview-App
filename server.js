'use strict';
//#####################################################
//Dependencies:
//#####################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var path = require('path')

var app = express();
// Database
var db = mongoose.connect('mongodb://localhost/interviewapp-dev');

mongoose.connection.once('connected', function () {
    console.log('Connected to database')
});




//#####################################################
//Port:
//#####################################################
var port = 3000;

//#####################################################
//Middelware:
//#####################################################
app.use(express.static('public'));

app.use('/', bodyParser.json());
app.use('/', cors());

//#####################################################
//Routes:
//#####################################################


//#####################################################
//Starting server:
//#####################################################

app.listen(port, function () {
    console.log('Im watching you port 3000 @.@');
});
