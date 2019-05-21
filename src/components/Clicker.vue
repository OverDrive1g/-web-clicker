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
                :value="mob.hp/max*100"
                class="text-md-center"
        >{{Math.round(mob.hp * 100) / 100}} HP</v-progress-linear>

        <v-snackbar
                v-model="snackbar"
                bottom
                left
                multi-line
        >
            {{ text }}

            <v-btn
                    color="pink"
                    flat
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
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
                max:0,
                clicks:0,
                snackbar: false,
                timeout: 6000,
                text: ''
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
                this.clicks += 1
                if(this.clicks === 1000){
                    this.text = "OMG!! You are crazy! Click 100 times!"
                    this.snackbar = true
                }

            },
            onGenerateMob(mob){
                this.mob = mob
                this.max = mob.hp
            }
        },
    }
</script>

<style scoped>

</style>