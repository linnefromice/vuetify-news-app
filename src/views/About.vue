<template>
  <div id="about">
    <v-layout text-xs-center mt-5 px-3 py-3>
      <v-flex xs12>
        <span class="display-2 font-weight-bold">About Me</span>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <v-img
            :src="require('../assets/icon_account.jpg')"
            alt="avatar"
          ></v-img>
        </v-avatar>
        <p class="headline font-weight mt-2"> {{ user.name }}</p>
        <p
          class="title font-weight-thin mt-3"
        >{{ user.introduction }}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'About',
  computed: {
    ...mapGetters('user', {
      user: 'getState'
    })
  }
  /*
  data: () => ({
    name: "linnefromice",
    introduction: "Hello I'm a Web Developer from Japan. Have 3 years work experience in IT Industry.",
  })
  */
}
</script>

