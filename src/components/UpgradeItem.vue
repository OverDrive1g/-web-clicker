<template>
    <v-list-tile>
        <div>{{upgrade.id}}</div>
        <v-list-tile-content>
            <v-list-tile-title>{{upgrade.text}}</v-list-tile-title>
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