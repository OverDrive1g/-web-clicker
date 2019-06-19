<template>
    <div
        class="pa-3"
        v-ripple="ripple"
    >
        <div class="text-xs-center mb-3">{{mob.name}}({{lvl}})</div>
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


    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { mapState } from 'vuex'
    import { MainController } from "../controllers/MainController"
    import AchievementsController from '../core/AchievementsController'

    let achievementsController = new AchievementsController()
    let mainController

    export default {
        name: "Clicker",
        data(){
            return {
                max:0,
                snackbar: false,
                timeout: 2000,
                text: '',
                description:''
            }
        },
        beforeMount(){
            mainController = new MainController(this.attack, this.incCoins, this.onGenerateMob, this.incLvl, this.getLvl)

            this.max = this.attack * 10
            this.hp = this.attack * 10
        },
        computed: {
            ...mapState('mob',["lvl"]),
            ...mapState('player',["attack"]),
            ...mapState('statistic',["clicks"]),
            ...mapState('settings',["ripple"]),
        },
        methods: {
            ...mapMutations('player', ['incCoins', 'setReward']),
            ...mapMutations('mob', ['incLvl']),
            ...mapMutations('statistic', ['incClicks']),
            ...mapMutations(['addNotification']),
            onClick:function(){
                mainController.onClick(this.attack)
                this.incClicks(1)
            },
            onGenerateMob(mob){
                this.mob = mob
                this.max = mob.hp
            },
            showSnackbar(text, icon){
                this.addNotification(text, icon)
            },
            getLvl(){
                return this.lvl
            }
        },
        watch:{
            clicks:achievementsController.clicksListener
        }
    }
</script>

<style scoped>

</style>
