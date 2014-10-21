var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Artist = require('./models/artist');
var Song = require('./models/song');
var Tag = require('./models/tag');

mongoose.connect('mongodb://localhost/song-tag');
var db = mongoose.connection;

var app = express();
app.use(bodyParser.json());

app.get('/artists', function(req, res) {
  Artist.find().exec(function(err, artists) {
    return res.json(artists);
  });
});
app.post('/artists', function(req, res) {
  var artist = new Artist(req.body);
  artist.save(function(err, artist) {
    return res.status(200).end();
  })
});
app.get('/artists/:id', function(req, res) {
  Artist.findOne({_id: req.param('id')}).populate('songs').exec(function(err, artist) {
    return res.json(artist);
  })
});
app.post('/artists/:id/songs', function(req, res) {
  var song = new Song(req.body);
  Artist.findOne({_id: req.param('id')}).populate('songs').exec(function(err, artist) {
    song.save(function(err, song) {
      artist.songs.push(song);
      artist.save();
      return res.status(200).end();
    })
  });
});

app.get('/songs/:id', function(req, res) {
  Song.findOne({_id: req.param('id')}).populate('tags').exec(function(err, song) {
    return res.json(song);
  })
});
app.post('/songs/:id/tags', function(req, res) {

  Tag.findOneAndUpdate({ name: req.body.name }, req.body, { upsert: true }).exec(function(err, tag) {

    Song.findOne({_id: req.param('id')}).populate('tags').exec(function(err, song) {
      song.tags.push(tag);
      song.save(function(err, song) {
        return res.status(200).end();
      });
    });

  });

});

app.listen(8000);
