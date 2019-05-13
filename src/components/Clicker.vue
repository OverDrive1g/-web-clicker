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
                :value="hp/max*100"
                class="text-md-center"
        >{{hp}}</v-progress-linear>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        name: "Clicker",
        data(){
            return {
                hp:0,
                max:0
            }
        },
        beforeMount(){
            this.max = this.income * 10
            this.hp = this.income * 10
        },
        computed: {
            ...mapState(["count","income"])
        },
        methods: {
            ...mapMutations(['increment']),
            onClick:function(){
                this.hp = this.hp - this.income;
                if(this.hp <= 0){
                    this.max = this.income * 10
                    this.hp = this.income * 10
                    this.increment(Math.floor(Math.random() * this.income*10))
                }
            }
        },
    }
</script>

<style scoped>

</style>