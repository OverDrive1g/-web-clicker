export default {
    incGold(state, income) {
        state.coins += income
    },
    setReward(state, reward){
        if(reward.type === "coin"){
            state.coins += reward.count
        }
    },
    buyUpgrade(state, upgradeId){
        let foundUpgrade = state.upgradeList.find(i=>i.id === upgradeId)

        if(!foundUpgrade) return

        let currPrice = foundUpgrade.basePrice * Math.pow(foundUpgrade.multiplier, foundUpgrade.count)

        if(state.coins >= currPrice){
            foundUpgrade.count++
            state.coins -= currPrice
            state.attack += foundUpgrade.income
        }
    },
    initUpgradeList(state, initData){
        state.upgradeList = initData
    },
}
