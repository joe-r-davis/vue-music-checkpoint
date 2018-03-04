var router = require("express").Router();
var Playlists = require("../models/playlist")
var Songs = require("../models/song");

//add playlist
router.post('/music/playlists', (req,res, next) => {
    Playlists.create(req.body)
    .then(playlist => {
        var response = {
            data: playlist,
            message: 'Added playlist!'
        }
        return res.send(response)
    })
    .catch(next);
})

//get playlist
router.get('/music/playlists', (req, res, next) => {
    Playlists.find()
        .then(playlists =>{
            return res.send(playlists);
        })
        .catch(next);
})

//get playlist by id
router.get('/music/playlists/:id', (req, res, next) => {
    var out = {}
    Playlists.findById(req.params.pid)
        .then(playlist => {
            return res.send(playlist);
        })
        .catch(next);
})

//delete playlist
router.delete('/music/songs/:id', (req,res, next) => {
    Playlists.findByIdAndRemove(req.params.id)
    .then(playlist => {
        var response = {
            data: playlist,
            message: 'Deleted playlist!'
        }
        return res.send(response)
    })
    .catch(next);
})



module.exports = { router };