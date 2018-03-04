var mongoose = require('mongoose');
var router = require("express").Router()
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var SchemaName = 'Playlist';
 
var schema = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('Playlist', schema)