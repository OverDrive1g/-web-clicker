<template>
    <div class="pa-3">
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
        }
    }
</script>

<style scoped>

</style>
