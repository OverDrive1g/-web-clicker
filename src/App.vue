<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Кликер</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>

import Home from './views/Home.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  },
  methods:{
    ...mapActions(['initUpgradeList'])
  },
  async created() {
    this.initUpgradeList()
  }
}
</script>
