<template>
    <div class="pa-3">
        <p>Clicks: {{Math.round(count * 100) / 100}}</p>
        <p>Income: {{Math.round(income * 100) / 100}}</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Statistic",
        computed: mapState(["count","income"]),
    }
</script>

<style scoped>

</style>