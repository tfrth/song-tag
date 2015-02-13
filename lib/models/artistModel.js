var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, index: true, required: true, unique: false},
	bio: {type: String},
	genre: {type: String, unique: true}
});

module.exports = Mongoose.model('Artist', schema);   //this is the reference

