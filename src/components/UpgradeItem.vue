<template>
    <v-list-tile>
        <v-list-tile-avatar>
            <img :src="require('../assets/upgrade.svg')">
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-title>{{upgrade.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{ upgrade.description.slice(0,50) }}...</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
            <v-list-tile-action-text>{{ upgrade.basePrice }}</v-list-tile-action-text>
            <v-icon
                    color="grey lighten-1"
            >
                star_border
            </v-icon>
        </v-list-tile-action>
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