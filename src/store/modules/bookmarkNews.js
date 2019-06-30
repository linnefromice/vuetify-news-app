const state = {
  currentNumber: 0,
  news: [],
}

const mutations = {
  addNews (state, article) {
    state.currentNumber++
    article.id = state.currentNumber
    state.news.push(article)
  },
  removeNews (state) {
    // nothing
    state.currentNumber+=0
  }
}

const actions = {
  addNews (context, post) {
    let article = {
      id: 0,
      title: post.title,
      section: post.section,
      byline: post.byline,
      image_url: post.image_url,
      url: post.url
    }
    context.commit('addNews', article)
  },
  removeNews (context) {
    context.commit('removeNews')
  }
}

const getters = {
  getNews (state) {
    return state.news
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}