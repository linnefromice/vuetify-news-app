<!-- https://qiita.com/_P0cChi_/items/ebf8fbf035b36218a37e -->
<template>
  <div id="counter">
    <div>Test page</div>
    <div>Count: {{count}}</div>
    <v-btn v-on:click="decrement">-1</v-btn><br>
    <v-btn v-on:click="increment">+1</v-btn><br>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Counter',
  computed: {
    ...mapGetters('counter', {
      count: 'getNumber',
    })
  },
  methods: {
    increment () {
      this.$store.dispatch('counter/increment')
    },
    decrement () {
      this.$store.dispatch('counter/decrement')
    }
  }
}
</script>
