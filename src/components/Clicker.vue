<template>
    <div
        class="pa-3"
    >
        <v-img
                :src="require('../assets/pig-coin.svg')"
                v-on:click="add"
        />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "Clicker",
        methods: {
            ...mapMutations({
                add:'increment'
            })
        },
    }
</script>

<style scoped>

</style>