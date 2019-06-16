<template>
  <v-footer
    app
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        found
      >
        {{ link }}
      </v-btn>
      <v-flex
        info
        lighten-2
        text-xs-center
        white--text
        xs12
      >
        <v-btn
          v-for="(icon, idx) in icons"
          :key="idx"
          :href="icon.ref"
          class="mx-3"
          dark
          icon
        >
          <font-awesome-icon
            :icon="[icon.prefix, icon.name]"
            size="2x"
          >
          </font-awesome-icon>
        </v-btn>
      </v-flex>
      <v-flex
        primary
        lighten-2
        text-xs-center
        white--text
        xs12
      >
          &copy; {{ new Date().getFullYear() }}
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      links: [
        'Home',
        'About',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ],
      icons: [
        { prefix: 'fas', name: 'school', ref: "https://www.pluralsight.com/codeschool" },
        { prefix: 'fab', name: 'twitter', ref: "https://twitter.com/twitterjp?lang=ja" },
        { prefix: 'fab', name: 'facebook', ref: "https://ja-jp.facebook.com/FacebookJapan/" },
        { prefix: 'fab', name: 'google-plus', ref: "https://plus.google.com/?hl=ja" },
        { prefix: 'fab', name: 'linkedin', ref: "https://jp.linkedin.com/" },
        { prefix: 'fab', name: 'instagram', ref: "https://www.instagram.com/instagramjapan/?hl=ja" },
      ]
    }
  }
}
</script>
