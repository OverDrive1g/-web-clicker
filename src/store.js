import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as config from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    attack:1,
    lvl:1,
    upgradeList:[]
  },
  mutations: {
    incGold (state, income) {
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
      state.attack = payload.attack
      state.upgradeList = payload.upgradeList
    },
    setReward(state, reward){
      if(reward.type === "coin"){
        state.count += reward.count
      }
    },
    incLvl(state){
      state.lvl += 1
    }
  },
  actions: {
    async initUpgradeList(context){
      let response = await axios.get(config.backendUrl+'/upgrade')
      let data = response.data.map(i=>{i.count = 0; return i})
      context.commit('initUpgradeList', data)
    },
    async save(context){
      let payload = {
        count:context.state.count,
        attack:context.state.attack,
        upgradeList:context.state.upgradeList
      }
      return await axios.post(config.backendUrl+'/save', JSON.stringify(payload))
    },
    async load(context, uuid){
      let savedData = await axios.post(config.backendUrl+'/load', JSON.stringify({uuid}))
      context.commit('loadSave', savedData.data.response.data)
    }
  }
})
