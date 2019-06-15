<template>
    <v-list-tile :disabled="disabled" v-on:click="onClick">
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
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'

    export default {
        name: "UpgradeItem",
        props: ['upgrade'],
        data:function(){
            return {
                disabled: true
            }
        },
        methods:{
            ...mapMutations('player',['buyUpgrade']),
            onClick: function() {
                this.buyUpgrade(this.upgrade.id)
            }
        },
        computed: {
            ...mapState('player', ['coins'])
        },
        watch:{
            coins:function(_new,_old){
                let price = this.upgrade.basePrice * Math.pow(this.upgrade.multiplier, this.upgrade.count)
                if(_new >= price){
                    this.disabled = false
                }
                // console.log(_old, _new)
            }
        }
    }
</script>

<style scoped>
    v-list--disabled{

    }
</style>
