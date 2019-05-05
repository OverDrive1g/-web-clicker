<template>
    <div>
        Clicks: {{count}}
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