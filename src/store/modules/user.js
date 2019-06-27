const state = {
  name: "linnefromice",
  introduction: "Hello I'm a Web Developer from Japan. Have 3 years work experience in IT Industry.",
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