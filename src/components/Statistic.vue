<template>
    <div class="pa-3">
        <p>Coins: {{Math.round(count * 100) / 100}}</p>
        <p>Attack: {{Math.round(attack * 100) / 100}}</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Statistic",
        computed: mapState(["count","attack"]),
    }
</script>

<style scoped>

</style>