export default {

    initUpgradeList(state, initData){
        state.upgradeList = initData
    },
    buyUpgrade(state, upgradeId){
        let foundUpgrade = state.upgradeList.find(i=>i.id === upgradeId)

        if(!foundUpgrade) return

        let currPrice = foundUpgrade.basePrice * Math.pow(foundUpgrade.multiplier, foundUpgrade.count)

        if(state.count >= currPrice){
            foundUpgrade.count++
            state.count -= currPrice
            state.attack += foundUpgrade.income
        }
    },
    loadSave(state, payload){
        state.count = payload.count
        state.attack = payload.attack
        state.upgradeList = payload.upgradeList
    },

}
