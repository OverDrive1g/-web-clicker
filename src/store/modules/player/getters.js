export default {
    getUpgradeList(state) {
        return state.upgradeList.map(i => {
            return {id: i.id, count: i.count}
        })
    },
    getPlayerInfoToSave(state){
        return {
            coins:state.coins,
            attack:state.attack
        }
    }
}
