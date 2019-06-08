export default {
    incCoins(state, income) {
        state.coins += income
    },
    setReward(state, reward){
        if(reward.type === "coin"){
            state.coins += reward.count
        }
    }
}
