<template>
    <v-list-tile>
        <v-list-tile-content>
            <v-list-tile-title>{{upgrade.name}}</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
    export default {
        name: "UpgradeItem",
        props: ['upgrade']
    }
</script>

<style scoped>

</style>