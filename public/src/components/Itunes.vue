<template>
    <div class="itunes">
        <div class="col-sm-112 m-1rem pd-1rem centerFlex">
            <form @submit.prevent="getMusicByArtist" class="form-inline">
                <input type="text" class="form-control" placeholder="Artist Name" v-model="artist">
                <button class="btn btn-primary" type="submit" id="get-music-button">Get Music</button>
            </form>
        </div>
        <div class="song col-sm-11 song-box m-1rem pd-1rem align-self-center" v-for="song in results">
            <div class="song-image  m-r-05rem">
                <img class="rounded mx-auto d-block" :src="song.artworkUrl100" alt="Album Art">
            </div>
            <div class="song-info">
                <h5 class="info-text">{{song.trackName}}</h5>
                <p class="info-text">Artist: {{song.artistName}}</p>
                <p class="info-text">Album: {{song.collectionName}}</p>
                <p>{{song.collectionPrice}}</p>
            </div>
            <audio controls class="audio audio-width">
                <source :src="song.previewUrl" type="audio/ogg">
                <source :src="song.previewUrl" type="audio/mpeg">
            </audio>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'iTunes',
        data() {
            return {
                artist: ''


            }
        },
        methods: {
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
                this.artist = ''
            },
            addToMyTunes(song) {
                this.$store.dispatch('addToMyTunes', song)
            }
        },
        computed: {
            results() {
                return this.$store.state.results
            }
        }
    }

</script>

<style scoped>
    .bg-gradient-img {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(-180deg, rgba(0, 179, 234, 0.6), rgba(188, 4, 216, 0.9));
    }

    .song-box {
        background-color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.6);
        border-style: solid;
        border-width: 1px;
        color: white;
        /* width: 300px; */
        border-radius: .2rem;
    }

    .song-image {
        display: inline-flex;
        vertical-align: top;
    }

    .info-text {
        margin: 0rem;
    }

    .song-info {
        display: inline-block;
    }

    .audio-width {
        width: 90%;
    }

    /* alignment helpers */

    .centerFlex {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    /* height helpers */

    .h-250px {
        height: 250px;
    }

    .h-300px {
        height: 300px;
    }

    .h-350px {
        height: 350px;
    }

    .h-400px {
        height: 400px;
    }

    .h-450px {
        height: 450px;
    }

    .h-500px {
        height: 500px;
    }

    /* padding helpers */

    .pd-1rem {
        padding: 1rem;
    }

    .pd-2rem {
        padding: 2rem;
    }

    .pd-3rem {
        padding: 3rem;
    }

    .pd-4rem {
        padding: 4rem;
    }

    .pd-left-1rem {
        padding-left: 1rem;
    }

    .pd-right-1rem {
        padding-right: 1rem;
    }

    .pd-top-1rem {
        padding-top: 1rem;
    }

    .pd-bottom-1rem {
        padding-bottom: 1rem;
    }

    .pd-left-2rem {
        padding-left: 2rem;
    }

    .pd-right-2rem {
        padding-right: 2rem;
    }

    .pd-top-2rem {
        padding-top: 2rem;
    }

    .pd-bottom-2rem {
        padding-bottom: 2rem;
    }

    /* margins helpers */

    .m-1rem {
        margin: 1rem;
    }

    .m-2rem {
        margin: 2rem;
    }

    .m-3rem {
        margin: 3rem;
    }

    .m-4rem {
        margin: 3rem;
    }

    .m-l-1rem {
        margin-left: 1rem;
    }
    .m-r-05rem {
        margin-right: .5rem;
    }

    .m-l-2rem {
        margin-left: 2rem;
    }

    .m-t-1rem {
        margin-top: 1rem;
    }

    .m-t-2rem {
        margin-top: 2rem;
    }

    .m-t-4rem {
        margin-top: 4rem;
    }

    .m-left-15px {
        margin-left: 15px;
    }

    .m-right-15px {
        margin-right: 15px;
    }
</style>