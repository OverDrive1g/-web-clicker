<template>
    <div class="pa-3">
        <p>Killed on lvl: {{killedOnLvl}}/10</p>
        <p>Coins: {{Math.round(coins * 100) / 100}}</p>
        <p>Attack: {{Math.round(attack * 100) / 100}}</p>
        <p>Clicks: {{Math.round(clicks * 100) / 100}}</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Statistic",
        computed: {
            ...mapState('statistic',["clicks","coins"]),
            ...mapState('player',["coins","attack"]),
            ...mapState('mob',["killedOnLvl"]),
        }
    }
</script>

<style scoped>

</style>
