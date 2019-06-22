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
    import AchievementsController from '../core/AchievementsController'
    import DamageController from "../core/DamageController";
    import MobFactory from "../core/MobFactory";

    let damageController = new DamageController()
    let mobFactory = new MobFactory()
    let achievementsController = new AchievementsController()


    export default {
        name: "Clicker",
        data(){
            return {
                max:0,
                mob:null
            }
        },
        beforeMount(){
            this.mob = mobFactory.getMob(1)

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
            ...mapMutations('player', ['incGold', 'setReward']),
            ...mapMutations('mob', ['incLvl']),
            ...mapMutations('statistic', ['incClicks']),
            ...mapMutations(['addNotification']),
            onClick:function(){
                let damage = damageController.getDamageByAttack(this.attack)
                this.mob.hp -=damage
                if(this.mob.hp <= 0){
                    this.onKillMonster(this.mob, this.lvl)
                    this.incLvl()
                    this.incGold(this.mob.gold)
                    this.generateMob()
                }

                this.incClicks(1)
            },
            generateMob(){
                this.mob = mobFactory.getMob(this.lvl)
                this.max = this.mob.hp
            },
            showSnackbar(text, icon){
                this.addNotification({text, icon})
            },
            onKillMonster(monster, lvl){
                console.log(monster, lvl)
            }
        },
        watch:{
            clicks:achievementsController.clicksListener
        }
    }
</script>

<style scoped>

</style>
