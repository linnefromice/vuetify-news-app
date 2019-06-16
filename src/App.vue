<template>
  <v-app>
    <Header></Header>
    <Navigation></Navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/globals/Header.vue';
import Navigation from './components/globals/Navigation.vue';
import Footer from './components/globals/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Footer,
  },
  data() {
    return {
      //
    };
  },
};
</script>
