import axios from 'axios'

export default {
  state: {
    user: null
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user
    }
  },
  getters: {

  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(res => commit('updateCurrentUser', res.data))
        .catch(console.error)
    }
  }
}