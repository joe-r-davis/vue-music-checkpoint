var router = require("express").Router();
var Songs = require("../models/song");


//get all songs
router.get('/mytunes/songs', (req, res, next) => {
    Songs.find(req.query) //{} empty returns everything
        .then(songs => {
            return res.send(songs);
        })
        .catch(next);
})

//get songs by id
router.get('/mytunes/songs/:sid', (req, res, next) => {
    Songs.findById(req.params.sid)
        .then(songs => {
            return res.send(songs);
        })
        .catch(next);
})

//add song to one playlist for now to meet reqs
router.post("/mytunes/playlist", (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            return res.send(song);
        })
        .catch(next);
});


//add song to playlist with playlist id (might have to be a stretch goal)
// router.post('/mytunes/playlists/:pid/songs', (req, res, next) => {
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
// router.post('/playlists', (req, res, next) => {
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

//update song on playlist
// router.put('/mytunes/playlists/:id/songs/:id', (req, res, next) => {
//     Songs.findByIdAndUpdate(req.params.id, req.body)
//         .then(song => {
//             var response = {
//                 data: song,
//                 message: 'Updated song on playlist!'
//             }
//             return res.send(response)
//         })
//         .catch(next);
// })


//update song- this for up and down votes, using one playlist for now to meet reqs
router.put('/mytunes/playlist/songs/:id', (req, res, next) => {
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
router.delete('/mytunes/playlist/songs/:id', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
        .then(playlist => {
            var response = {
                data: song,
                message: 'Deleted song from playlist!'
            }
            return res.send(response)
        })
        .catch(next);
})

module.exports = { router };