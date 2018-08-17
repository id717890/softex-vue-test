<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center min-height="1000">
        <v-flex xs12 row justify-center class="mb-5">
          <img src="@/assets/logo.png" alt="logo" style="max-width: 300px;" class="mb-5">
          <h2 class="display-1" style="text-align: center">
            &#8220;Test job for SOFTEX&#8221;
          </h2>
        </v-flex>
        <v-flex xs12 justify-center>
          <carousel :scrollPerPage="true" :perPage=1 :perPageCustom="[[480, 1], [768, 3]]">
            <slide v-for="item in carouselItems" :key="item.id">
              <a :href="item.link" target="_blank">
                <img :src="item.link" :alt="item.caption" style="width: 300px;  max-width: 100%;">
              </a>
            </slide>
          </carousel>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import {mapGetters} from 'vuex'

export default {
  components: {Carousel, Slide},
  computed: {
    ...mapGetters({
      'carouselItems': 'carousel/model'
    })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.VueCarousel-slide {
  position: relative;
  /* background: #42b983; */
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
  max-height: 150px;
  overflow: hidden;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
