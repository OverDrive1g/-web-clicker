import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:10000,
    attack:1,
    upgradeList:[]
  },
  mutations: {
    increment (state, income) {
      if(income > 0){
        state.count += income
      }
      else{
        state.count += state.attack
      }
    },

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
      state.attack = payload.income
      state.upgradeList = payload.upgradeList
    }
  },
  actions: {
    async initUpgradeList(context){
      let response = await axios.get('/api/upgrade')
      let data = response.data.map(i=>{i.count = 0; return i})
      context.commit('initUpgradeList', data)
    }
  }
})
