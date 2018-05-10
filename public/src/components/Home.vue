<template>
  <div class="home">
    <div class="row container-fluid bg-image-centered header">
      <div class="col-sm-12 centerFlex m-1rem center-flex">
        <h1 class="display-3 top-callout-text pd-1rem"> Find your music </h1>
      </div>
    </div>
    <div class="row container-fluid children">
      <itunes class="itunes col-sm-6"></itunes>
      <my-tunes class="my-tunes col-sm-6"></my-tunes>

    </div>

    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
  </div>
</template>

<script>
  import MyTunes from './MyTunes.vue'
  import Itunes from './Itunes.vue'
  export default {
    name: 'home',
    data() {
      return {
        // artist: ''      
      }
    },
    components: {
      Itunes,
      MyTunes
    },
    methods: {
      getMyTunes() {
        this.$store.dispatch('getMyTunes')
      }
    }
  }
</script>


<style scoped>
  .header {
    height: 20vh;
  }

  .children {
    padding-right: 0px;
  }

  .bg-image-centered {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../assets/aditya-chinchure-494048-top-bg-500px-tall.jpg");
  }

  .top-callout-text {
    color: rgba(255, 255, 255, 0.9);
    text-align: center;

  }

  .centerFlex {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .centered-text {
    text-align: center;
  }

  .pd-1rem {
    padding: 1rem;
  }

  .my-tunes {
    display: inline-block;
    min-height: 80vh;
    background-image: linear-gradient(-180deg, rgba(0, 179, 234, 0.6), rgba(188, 4, 216, 0.9));
  }

  .itunes {
    display: inline-block;
    background-image: linear-gradient(-180deg, rgba(0, 179, 234, 0.6), rgba(188, 4, 216, 0.9));
    min-height: 80vh;
  }
</style>