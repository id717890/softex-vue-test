<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer;" v-text="title"></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items  class="hidden-xs-only">
        <v-btn 
          flat 
          v-for="item in menuItems" :key="item.title"
          :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.caption}}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items  class="hidden-sm-and-up">
        <v-btn 
          flat 
          v-for="item in menuItems" :key="item.title"
          :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content style="min-height: 1500px">
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      'menuItems': 'menu/model'
    })
  },
  data () {
    return {
      fixed: false,
      title: 'SOFTEX-VUE'
    }
  },
  name: 'App'
}
</script>
