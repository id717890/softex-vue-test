import * as types from '../mutation-types'
import context from '@/api/menu'

const state = {
  model: []
}

// getters
const getters = {
  model: state => state.model
}

// actions
const actions = {
  reciveMenuItems ({commit}) {
    return new Promise((resolve, reject) => {
      context.getMenuPermission()
        .then(x => {
          commit(types.RECIVE_MENU_ITEMS, x)
          resolve()
        })
        .catch(x => reject(x))
    })
  }
}

// mutations
const mutations = {
  [types.RECIVE_MENU_ITEMS] (state, payload) {
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
