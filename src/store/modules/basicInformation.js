const state = {
  main: "NEWS SITE",
  sub: "The New York Times",
}

const getters = {
  getState (state) {
    return state
  }
}

export default {
  namespaced: true,
  state,
  getters,
}