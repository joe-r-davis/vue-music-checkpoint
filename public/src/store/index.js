import vue from 'vue';
import vuex from 'vuex';
import $ from 'jquery';
import axios from 'axios';

var api = axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 5000
  // withCredentials: true
});

// var auth = axios.create({
//   baseURL: "//localhost:3000/auth/",
//   timeout: 5000,
//   withCredentials: true
// });

vue.use(vuex)

var store = new vuex.Store({
  state: {
    user: {
      name: "Joe"
    },
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results
    },
    setMyTunes(state, results) {
      results.sort(function (a, b) {
        return b.rank - a.rank;
      })
      state.myTunes = results
    },
    addMyTunes(state, results) {
      state.myTunes.push(results)
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        data = JSON.parse(data)
        console.log('Look at results', data)
        commit('setResults', data.results)
      })
    },

    //this should send a get request to your server to return the list of saved tunes
    getMyTunes({ commit, dispatch }) {
      api.get("playlists")
        .then(result => {
          console.log(result)
          commit('setMyTunes', result.data)
        })
        .catch(err => { console.log(err) })
    },

    //this will post to your server adding a new track to your tunes
    addToMyTunes({ commit, dispatch }, track) {
      api.post('playlists', track) 
        .then(result => {
          commit('addMyTunes, track')
        })
        .catch(err => { console.log(err) })
    },

    //Removes track from the database with delete
    removeTrack({ commit, dispatch }, track) {
      api.delete('playlists/songs' + track._id)
        .then(result => {
          dispatch('getMyTunes')
        })
        .catch(err => { console.log(err) })
    },

    //this should increase the position / upvotes and downvotes on the track
    promoteTrack({ commit, dispatch }, track) {
      track.rank++
      api.put('playlists/songs/' + track._id, track)
        .then(result => {
          dispatch('getMyTunes')
        })
        .catch(err => { console.log(err) })
    },

    //this should decrease the position / upvotes and downvotes on the track
    demoteTrack({ commit, dispatch }, track) {
      track.rank--
      api.put('playlists/songs/' + track._id, track)
        .then(result =>{
          dipatch('getMyTunes')
        })
        .catch(err => { console.log(err) })
    }
  }
})

export default store
