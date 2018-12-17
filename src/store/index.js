import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot)
    }
  },
  // you pass in context into the actions, which can be deconstructed.
  actions: {
    getParts({ commit }) {
      
    }
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale)
    }
  }
})