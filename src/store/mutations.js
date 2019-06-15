export default {

    loadSave(state, payload){
        console.log(payload )
        state.mob.lvl = payload.mob.lvl

        state.player.attack = payload.player.attack
        state.player.coins = payload.player.coins

        state.statistic.clicks = payload.statistic.clicks

        let upgrades = payload.upgrade

        for (let i = 0; i < upgrades.length; i++) {
            let found = state.player.upgradeList.find(itm=>itm.id === upgrades[i].id)
            if(found){
                found.count = upgrades[i].count
            }
        }

    },
    setSaveId(state, id){
        state.saveId = id
    }

}
