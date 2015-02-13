var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	id_ : {type: String, required: true, unique: true}, //when something is unique it is also indexed by default
});

module.exports = Mongoose.model('Tag', Schema);



