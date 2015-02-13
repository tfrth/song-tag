var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var Artist = require('./artistModel');

var schema = new Schema({
	name: {type: String, required: true, uniqueness: false},
	album: {type: String, index: true, required: true},
	genre: {type: String},
	releasedOn: {type: Date},
	isExplicit: {type: Boolean},
	artist: {type: Schema.Types.ObjectId, ref: 'Artist'},  //  example reference to another schema/model. In this case referencing the actual object ID of artistModel
	tags: [{type: Number, ref: 'Tag'}]
});

module.exports = Mongoose.model('Song', schema);




