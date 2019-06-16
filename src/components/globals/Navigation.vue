<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    fixed
    clipped
  >

    <v-list class="pt-0" dense>
      <v-list-tile
        v-for="(link, idx) in links"
        :key="idx"
        :to="link.to"
      >
        <v-list-tile-action>
          <v-icon> {{ link.icon }} </v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title> {{ link.name }} </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-toolbar flat class="transparent">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name:'NEWS', icon:'chat', to:'/news'},
      { name:'ABOUT ME', icon:'question_answer', to:'/about' },
      { name:'ADV', icon:'info', to:'/advertisement' },
    ],
    drawer: true,
    mini: true,
    right: null
  })
}
</script>
