import Vue from 'vue';
import Router from 'vue-router';

import News from './views/News.vue';
import About from './views/About.vue';
import Advertisement from './views/Advertisement.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/advertisement',
      name: 'advertisement',
      component: Advertisement,
    },
  ],
});
