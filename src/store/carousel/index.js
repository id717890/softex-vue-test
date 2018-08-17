import * as types from '../mutation-types'
import context from '@/api/carousel'

const state = {
  model: []
}

// getters
const getters = {
  model: state => state.model
}

// actions
const actions = {
  reciveCarouselItems ({commit}) {
    return new Promise((resolve, reject) => {
      context.getCarouselItems()
        .then(x => {
          commit(types.RECIVE_CAROUSEL_ITEMS, x)
          resolve()
        })
        .catch(x => reject(x))
    })
  }
}

// mutations
const mutations = {
  [types.RECIVE_CAROUSEL_ITEMS] (state, payload) {
    state.model = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
