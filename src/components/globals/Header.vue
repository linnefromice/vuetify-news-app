<template>
  <v-toolbar
    app
    fixed
    clipped-left
    clipped-right
  >
    <v-toolbar-title class="headline text-uppercase">
      <span>{{ basicInformation.main }}</span>
      <v-spacer></v-spacer>
      <span class="font-weight-light">{{ basicInformation.sub }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
    >
      <span class="mr-2 reference"> {{ link.name }} </span>
      <v-icon> {{ link.icon }} </v-icon>
    </v-btn>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2 reference">Latest Release</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    links: [
      { name:'NEWS', icon:'chat', to:'/news'},
      { name:'ABOUT ME', icon:'question_answer', to:'/about' },
      { name:'ADV', icon:'info', to:'/advertisement' },
      { name:'TEST', icon:'info', to:'/test'},
    ]
  }),
  computed: {
    ...mapGetters('basicInformation', {
      basicInformation: 'getState'
    })
  }
}
</script>

<style scoped1>
.reference {
  color: blueviolet;
}
</style>