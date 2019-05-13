<template>
    <v-list-tile v-on:click="onClick">
        <v-list-tile-avatar>
            <img :src="require('../assets/upgrade.svg')">
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-title>{{upgrade.name}}</v-list-tile-title>
            <v-list-tile-sub-title>Epic description of the improvement that gives only {{upgrade.income}} per click</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
            <v-list-tile-action-text>{{ Math.round((upgrade.basePrice * Math.pow(upgrade.multiplier, upgrade.count))*100)/100 }}</v-list-tile-action-text>
            <div>{{upgrade.count}}</div>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "UpgradeItem",
        props: ['upgrade'],
        methods:{
            ...mapMutations(['buyUpgrade']),
            onClick: function() {
                this.buyUpgrade(this.upgrade.id)
            }
        }
    }
</script>

<style scoped>

</style>