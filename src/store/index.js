import Vue from 'vue'
import Vuex from 'vuex'

import menu from './menu'
import carousel from './carousel'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    menu,
    carousel
  }
})
