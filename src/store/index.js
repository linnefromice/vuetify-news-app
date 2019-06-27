import Vue from 'vue';
import Vuex from 'vuex';
import basicInformation from './modules/basicInformation.js';
import user from './modules/user.js';
import counter from './modules/counter.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    basicInformation,
    user,
    counter,
  }
})