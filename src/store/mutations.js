export default {

    loadSave(state, payload){
        state.count = payload.count
        state.attack = payload.attack
        state.upgradeList = payload.upgradeList
    },

}
