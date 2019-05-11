<template>
    <div>
        Clicks: {{Math.round(count * 100) / 100}}
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Statistic",
        computed: mapState(["count"]),
    }
</script>

<style scoped>

</style>