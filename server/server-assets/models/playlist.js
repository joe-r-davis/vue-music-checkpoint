var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new mongoose.Schema({
    artistName: { type: String, required: true },
    artworkUrl100: { type: String, required: true },
    collectionName: { type: String, required: true },
    playlistId: { type: String },
    previewUrl: { type: String, required: true },
    rank: { type: Number, required: true, default: 0 },
    trackId: {type: Number, required: true, unique: true },
    trackName: { type: String, required: true },
    trackPrice: { type: Number, required: true }
})

module.exports = mongoose.model('Playlist', schema)