<template>
  <v-container>
    <v-list two-line>
      <template
        v-for="(techstack, index) in techstacks"
      >
        <v-divider
          :key="index"
        ></v-divider>
        <v-list-tile
          :key="index"
          :href="techstack.url"
          target="_blank"
          avatar
        >
          <v-list-tile-avatar>
            <img
              :src="techstack.image"
            >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="techstack.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="techstack.description"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider
          :key="index"
        ></v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      techstacks: [
        {
          name: "Vuetify",
          image: require("../assets/logo.svg"),
          description: "design framework for Vue.js.",
          url: "https://vuetifyjs.com",
        },
        {
          name: "Vue Router",
          image: require("../assets/logo_vue.png"),
          description: "Vue.js's official router.",
          url: "https://router.vuejs.org/ja/",
        },
        {
          name: "axios",
          image: require("../assets/logo_axios.png"),
          description: "Promise based HTTP client for the browser and node.js.",
          url: "https://github.com/axios/axios",
        },
        {
          name: "Font Awesome",
          image: require("../assets/logo_fontawesome.svg"),
          description: "the web's most popular icon set and toolkit.",
          url: "https://fontawesome.com/",
        },
      ],
    })
  }
</script>

<style>

</style>
