var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var SchemaName = "Song";

var schema = new Schema({
    artistName: { type: String, required: true },
    artworkUrl100: { type: String, required: true },
    collectionName: { type: String, required: true },
    playlistId: { type: String },
    previewUrl: { type: String, required: true },
    rank: { type: Number, required: true, default: 0 },
    trackId: {type: Number, required: true},
    trackName: { type: String, required: true },
    trackPrice: { type: Number, required: true }
})



module.exports = mongoose.model('Song', schema)