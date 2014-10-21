var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Tag', {
  name: { type: String, unique: true, required: true },
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
});
