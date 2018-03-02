import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'
import axios from 'axios'

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
    setResults(state, results){
      state.results = results
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        data = JSON.parse(data)
        console.log('Look at results', data)
        commit('setResults', data.results)
      })
    },
    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({commit, dispatch}, track){
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({commit, dispatch}, track){
      //Removes track from the database with delete
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
