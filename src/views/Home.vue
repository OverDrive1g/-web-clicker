<template>
  <v-container>
    <v-layout align-center justify-space-between wrap>
      <v-flex lg4 xl4 md4 sm12 xs12 pa-3>
        <v-card v-ripple class="elevation-24">
          <Clicker />
        </v-card>
      </v-flex>
      <v-flex lg4 xl4 md4 sm12 xs12 pa-3>
        <v-card class="elevation-24">
          <Statistic />
        </v-card>
      </v-flex>
      <v-flex lg4 xl4 md4 sm12 xs12 pa-3>
        <v-card class="elevation-24">
          <UpgradeList />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Clicker from '../components/Clicker.vue'
  import Statistic from "../components/Statistic.vue";
  import UpgradeList from "../components/UpgradeList.vue";

  export default {
    components: {
      UpgradeList,
      Statistic,
      Clicker
    },
    metaInfo:{
      title: 'Pig-Clicker',
      meta:[
        {name: 'description', content: 'Awesome clicker with little pig'},

        // OpenGraph data (Most widely used)
        {property: 'og:title', content: 'Pig-Clicker'},
        {property: 'og:site_name', content: 'Clicker'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://cl1cker.online/'},
        {property: 'og:image', content: 'https://cl1cker.online/logo.png'},
        {property: 'og:description', content: 'Awesome clicker with little pig'},

        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://cl1cker.online/'},
        {name: 'twitter:title', content: 'Pig-Clicker'},
        {name: 'twitter:description', content: 'Awesome clicker with little pig'},
        {name: 'twitter:creator', content: '@OverDrive1g'},
        {name: 'twitter:image:src', content: 'https://cl1cker.online/logo.png'},

        // Google / Schema.org markup:
        {itemprop: 'name', content: 'Pig-Clicker'},
        {itemprop: 'description', content: 'Awesome clicker with little pig'},
        {itemprop: 'image', content: 'https://cl1cker.online/logo.png'}
      ],
      link: [
        {rel: 'canonical', href: 'https://www.cl1cker.online/'}
      ]
    }
  }
</script>
