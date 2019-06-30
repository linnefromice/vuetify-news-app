import Vue from 'vue';
import Router from 'vue-router';

import News from './../views/News.vue';
import BookmarkNews from '../views/BookmarkedNews.vue';
import About from './../views/About.vue';
import Advertisement from './../views/Advertisement.vue';
import Test from './../views/Test.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/bookmarkedNews',
      name: 'bookmarkedNews',
      component: BookmarkNews,
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
    {
      path: '/test',
      name: 'test',
      component: Test,
    }
  ],
});
