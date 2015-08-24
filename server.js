'use strict';
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var path = require('path')
var passport = require('passport');
var session = require('express-session');
var questionCtrl = require('./api/controllers/questionsCtrl');

// MongoDB
mongoose.connect('mongodb://localhost/interviewapp-dev');
mongoose.connection.once('connected', function () {
    console.log('Connected to database')
});

// Express
var app = express();

// Port
var port = 3000;

// Middleware
app.use(express.static(__dirname + '/Public'));

app.use('/', bodyParser.json());
app.use('/', cors());

// Routes
app.get('/api/:lang', questionCtrl.getQuestion);

// Start server
app.listen(port, function () {
    console.log('Im watching you port 3000 @.@');
});
