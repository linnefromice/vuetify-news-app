const state = {
  number: 0
}

const mutations = {
  increment (state) {
    console.log("TEST mutations.increment")
    console.log(state)
    state.number++
  },
  decrement (state) {
    console.log("TEST mutations.decrement")
    console.log(state)
    state.number--
  },
}

const actions = {
  increment (context) {
    console.log("TEST actions.increment")
    console.log(context)
    context.commit('increment')
  },
  decrement (context) {
    console.log("TEST actions.decrement")
    console.log(context)
    context.commit('decrement')
  }
}

const getters = {
  getNumber (state) {
    console.log("TEST getters.getNumber")
    console.log(state)
    return state.number
  }
}
  
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}