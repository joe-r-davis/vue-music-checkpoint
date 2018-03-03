var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
 
var schema = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('Playlist', schema)