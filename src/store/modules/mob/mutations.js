export default {
    incLvl(state){
        state.lvl += 1
    },
    incKilledOnLvl(state){
        state.killedOnLvl += 1
    },
    restoreKilledOnLvl(state){
        state.killedOnLvl = 0
    }
}
