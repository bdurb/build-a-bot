import axios from 'axios'

export default {
  namespaced: true,
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
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot]
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot))
    }
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale)
    }
  }
}