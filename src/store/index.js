import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot)
    },
    updateParts(state, parts) {
      state.parts = parts
    }
  },
  // you pass in context into the actions, which can be deconstructed.
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(res => commit('updateParts', res.data))
        .catch(console.error)
    }
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale)
    }
  }
})