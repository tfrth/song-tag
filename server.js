var express = require('express');
var mongoose = require('mongoose');
var BodyParser = require('body-parser');
var app = express();

app.use(BodyParser.json());

var mongoUri = "mongodb://localhost:27017/song-tag"; //sets URL to mongo db

//controllers

var artistCtrl = require('./lib/controllers/artistCtrl');
// var songCtrl = require('.')


mongoose.connect(mongoUri);                          //establishes a connecttion to mongodb
mongoose.connection.once('open', function(){
	console.log('connected to db ' + mongoUri);
})

//routes go here

var port = 8000;

app.listen(port, function(){
	console.log("Listening on port " + port);
});


app.post('/artist', artistCtrl.post);   