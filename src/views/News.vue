<template> 
  <v-layout
    row
    wrap
  >
    <v-flex
      v-for="(posts, idx) in processedPosts"
      :key="idx"
      xs6
    >
      <v-card
        v-for="(post, postIdx) in posts"
        :key="postIdx"
        target="_blank"
      >
        <v-card-title>
          <div>
            <span class="blue--text">TITLE : {{ post.title }}</span><br>
            <span class="gray--text">SECTION : {{ post.section }}</span><br>
            <span class="gray--text">{{ post.byline }}</span>
          </div>
        </v-card-title>      
        <v-img
          :src="post.image_url"
          height="200px"
        >
        </v-img>
        <v-card-actions>
          <v-btn
            icon
            v-on:click="addNews(post)"
          >
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn
            icon
            :href="post.url"
          >
            <v-icon>link</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <span class="grey--text">{{ post.abstract }}</span>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "XXXX";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

export default {
  name: 'News',
  data: () => ({
    results: [],
  }),
  mounted () {
    this.getPosts('home');
  },
  methods: {
    addNews (post) {
      this.$store.dispatch('bookmarkNews/addNews', post)
    },
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
    }
  },
  computed: {
    processedPosts() {
      let posts = this.results;

      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
      });

      // Put Array into Chunks
      let i, j, chunkedArray = [], chunk = 4;
      for (i=0, j=0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    }
  }
}
</script>
