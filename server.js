//          //
//  SERVER  //
//          //


'use strict';
// Definititions and Requires
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var path = require('path')
var passport = require('passport');
var session = require('express-session');
var app = express();
var config = require('./config.js');

// Controllers
var questionCtrl = require('./api/controllers/questionsCtrl');
var cssCtrl = require('./api/controllers/cssCtrl');


// Middleware
app.use(express.static(__dirname + '/Public'));
app.use('/', bodyParser.json());
app.use('/', cors());


// MongoDB
mongoose.connect(config.dbconn);
mongoose.connection.once('connected', function () {
    console.log('Connected to database')
});

// Start server
var portNum = config.portNum;
app.listen(portNum, function () {
    console.log('Im watching you port 3000 @.@', portNum);
});
//var port = 3000;
//app.listen(port, function () {
//    console.log('Im watching you port 3000 @.@');
//});

// EndPoints
app.get('/api/:lang', questionCtrl.getQuestion);


