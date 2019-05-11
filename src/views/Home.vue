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
    }
  }
</script>
