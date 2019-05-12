import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    income:1,
    upgradeList:[]
  },
  mutations: {
    increment (state) {
      state.count += state.income
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
        state.income += foundUpgrade.income
      }
    },
    loadSave(state, payload){
      state.count = payload.count
      state.income = payload.income
      state.upgradeList = payload.upgradeList
    }
  },
  actions: {
    async initUpgradeList(context){
      let response = await axios.get('http://213.32.68.143:3000/upgrade')
      let data = response.data.map(i=>{i.count = 0; return i})
      context.commit('initUpgradeList', data)
    }
  }
})
