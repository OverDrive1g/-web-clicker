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
                :value="mob.hp/mob.gold*100"
                class="text-md-center"
        >{{Math.round(mob.hp * 100) / 100}} HP</v-progress-linear>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { mapState } from 'vuex'
    import {MainController} from "../controllers/MainController";

    let mainController

    export default {
        name: "Clicker",
        data(){
            return {
                hp:0,
                max:0
            }
        },
        beforeMount(){
            mainController = new MainController(this.attack, this.increment, this.onGenerateMob)
            this.max = this.attack * 10
            this.hp = this.attack * 10
        },
        computed: {
            ...mapState(["count","attack"])
        },
        methods: {
            ...mapMutations(['increment']),
            onClick:function(){
                mainController.onClick(this.attack)
            },
            onGenerateMob(mob){
                this.mob = mob
            }
        },
    }
</script>

<style scoped>

</style>