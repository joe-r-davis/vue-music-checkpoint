var router = require("express").Router();
var Songs = require("../models/song");
var Playlists = require("../models/playlist")

//get all songs
router.get('/music/songs', (req, res, next) => {
    Songs.find(req.query) //{} empty returns everything
        .then(songs => {
            return res.send(songs);
        })
        .catch(next);
})

//get songs by id
router.get('/music/songs/:sid', (req, res, next) => {
    Songs.findById(req.params.sid)
        .then(songs => {
            return res.send(songs);
        })
        .catch(next);
})

//add song
router.post('/music/songs', (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            var response = {
                data: song,
                message: 'saved song to database!'
            }
            return res.send(response)
        })
        .catch(next);
})

//add song to playlist with playlist id (might have to be a stretch goal)
// router.post('/music/playlists/:pid/songs', (req, res, next) => {
//     req.body.playlistId = req.params.pid
//     Songs.create(req.body)
//         .then(song => {
//             var response = {
//                 data: song,
//                 message: 'Successfully added song to playlist!'
//             }
//             res.send(response)
//         })
//         .catch(next);
// })

//add song to playlist - Need to make one playlist work first to meet reqs
router.post('/music/playlists', (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            var response = {
                data: song,
                message: 'Successfully added song to playlist!'
            }
            res.send(response)
        })
        .catch(next);
})

//update song on playlist
router.put('/music/playlists/:id/songs/:id', (req, res, next) => {
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


//update song- this for up and down votes
router.put('/music/songs/:id', (req, res, next) => {
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
router.delete('/music/songs/:id', (req, res, next) => {
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