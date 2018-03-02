var router = require("express").Router();
var Songs = require("../models/song");
var Playlists = require("../models/playlist")

//get all songs
router.get('/music/songs', (req, res, next) => {
    Songs.find(req.query) //{} empty returns everything
        .then(songs =>{
            return res.send(songs);
        })
        .catch(next);
})

//get songs by id
router.get('/music/songs/:sid', (req, res, next) => {
    Songs.findById(req.params.sid)
        .then(songs =>{
            return res.send(songs);
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


//get playlsit by id
router.get('/music/playlists/:pid/songs', (req, res, next) => {
    var out = {}
    Playlists.find(req.params.pid)
        .then(playlists =>{
            out.playlist = playlist
            Songs.find({playlistId: req.params.pid})
                .then(songs => {
                    out.songs = songs
                    return res.send(out)
                })
        })
        .catch(next);
})


//save song
router.post('/music/songs', (req,res, next) => {
    Songs.create(req.body)
    .then(song => {
        var response = {
            data: song,
            message: 'Added song to playlist!'
        }
        return res.send(response)
    })
    .catch(next);
})


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


//add song to playlist
router.post('/music/playlists/:pid/songs', (req,res, next) => {
    Songs.create(req.body)
    .then(song => {
        var response = {
            data: song,
            message: 'Added song to playlist!'
        }
        return res.send(response)
    })
    .catch(next);
})


//update song on playlist
router.put('/music/playlists/:pid/songs/:id', (req,res, next) => {
    Songs.findByIdAndUpdate(req.params.id, req.body)
    .then(song => {
        var response = {
            data: song,
            message: 'Updated song on playlist!'
        }
        return res.send(response)
    })
    .catch(next);
})


//update song
router.put('/music/songs/:id', (req,res, next) => {
    Songs.findByIdAndUpdate(req.params.id, req.body)
    .then(song => {
        var response = {
            data: song,
            message: 'Updated song on playlist!'
        }
        return res.send(response)
    })
    .catch(next);
})


//delete song
router.delete('/music/songs/:id', (req,res, next) => {
    Songs.findByIdAndRemove(req.params.id)
    .then(song => {
        var response = {
            data: song,
            message: 'Deleted song from playlist!'
        }
        return res.send(response)
    })
    .catch(next);
})

module.exports = { router };