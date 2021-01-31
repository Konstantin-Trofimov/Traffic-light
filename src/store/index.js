import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTrafficStopped: false,
    time: undefined
  },
  mutations: {
    TOGGLE: (state) => {
      state.isTrafficStopped = !state.isTrafficStopped
    },
    SET_TIMER: (state, time) => {
      state.time = time
      let timer = setInterval(() => {
        if (state.time >= 0) {
          state.time--
        } else {
          clearInterval(timer)
        }
      }, 1000)
    }

  },
  actions: {
    TOGGLE_TRAFFIC_LIGFT({
      commit
    }) {
      commit('TOGGLE')
    },
    TOGGLE_TIMER({
      commit
    }, time) {
      commit('SET_TIMER', time)
    },

  },
  getters: {
    TRAFFIC(state) {
      return state.isTrafficStopped
    },
    TIMER(state) {
      return state.time
    }

  }
})