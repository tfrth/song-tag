var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Song', {
  name: { type: String },
  album: { type: String },
  genre: { type: String },
  releasedOn: { type: Date },
  isExplicit: { type: Boolean, default: false },

  artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
});
