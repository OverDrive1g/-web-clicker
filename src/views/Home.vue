<template>
  <v-container fluid fill-height>
    <v-layout align-space-around justify-center row fill-height>
      <v-container>
        <v-card
                v-ripple
                class="elevation-24">
          <Clicker />
        </v-card>
      </v-container>
      <v-container>
        <v-card class="elevation-24">
          <Statistic />
        </v-card>
      </v-container>
      <v-container>
        <v-card class="elevation-24">
          <UpgradeList />
        </v-card>
      </v-container>
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
