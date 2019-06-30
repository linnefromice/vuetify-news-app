<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs6
    >
      <v-card
        v-for="(post, idx) in posts"
        :key="idx"
      >
        <v-card-title>
          {{ post.title }}
        </v-card-title>
        <v-img
          :src="post.image_url"
          height="200px"
        >
        </v-img>
        <v-card-actions>

        </v-card-actions>
        <v-card-text>
          <span class="grey--text">{{ post.abstract }}</span>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BookmarkedNews',
  computed: {
    ...mapGetters('bookmarkNews',{
      posts: 'getNews',
    })
  }
}
</script>

