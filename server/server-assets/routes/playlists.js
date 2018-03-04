var router = require("express").Router();
var Playlists = require("../models/playlist");

//add playlist
router.post('/mytunes/playlists', (req,res, next) => {
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

//get playlist - using one playlist for now to meet reqs
router.get('/mytunes/playlist/', (req, res, next) => {
    Playlist.find()
        .then(playlist =>{
            return res.send(playlist);
        })
        .catch(next);
})

//get playlist by id
router.get('/mytunes/playlists/:id', (req, res, next) => {
    var out = {}
    Playlists.findById(req.params.pid)
        .then(playlist => {
            return res.send(playlist);
        })
        .catch(next);
})

//delete playlist
// router.delete('/mytunes/songs/:id', (req,res, next) => {
//     Playlists.findByIdAndRemove(req.params.id)
//     .then(playlist => {
//         var response = {
//             data: playlist,
//             message: 'Deleted playlist!'
//         }
//         return res.send(response)
//     })
//     .catch(next);
// })



module.exports = { router };