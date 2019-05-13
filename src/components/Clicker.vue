<template>
    <div
        class="pa-3"
    >
        <v-img
                :src="require('../assets/pig-coin.svg')"
                v-on:click="onClick"
        />
        <v-progress-linear
                color="error"
                height="20"
                :value="hp"
                class="text-md-center"
        >{{hp}}</v-progress-linear>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "Clicker",
        data(){
            return {
                hp:100
            }
        },
        methods: {
            ...mapMutations({
                add:'increment'
            }),
            onClick:function(){
                this.hp = this.hp - 20;
                if(this.hp < 0){
                    this.hp = 100
                }
                this.add()
            }
        },
    }
</script>

<style scoped>

</style>