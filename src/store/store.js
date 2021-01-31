import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTrafficStopped: false
  },
  mutations: {
    TOGGLE: (state) => {
      state.isTrafficStopped = !state.isTrafficStopped
    },
  },
  actions: {
    TOGGLE_TRAFFIC_LIGFT({
      commit
    }) {
      commit('TOGGLE', )
    },
  },
  getters: {
    TRAFFIC(state) {
      return state.isTrafficStopped
    },
  }
})