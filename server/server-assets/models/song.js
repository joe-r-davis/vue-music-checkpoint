var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var SchemaName = "Song";

var schema = new Schema({
    title: { type: String, required: true },
    albumArt: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    albumPrice: { type: Number, required: true },
    preview: { type: String, required: true },
    genre: { type: String, required: true },
    trackId: {type: Number, required: true},
    playlistId:{type: String},
    rank: { type: Number, required: true, default: 0 }
})



module.exports = mongoose.model('Song', schema)