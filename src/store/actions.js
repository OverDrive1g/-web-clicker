import axios from 'axios'
import * as config from '../config'

export default {
    async initUpgradeList(context){
        let response = await axios.get(config.backendUrl+'/upgrade')
        let data = response.data.map(i=>{i.count = 0; return i})

        context.commit('player/initUpgradeList', data)
    },
    async save(context, payload){
        return await axios.post(config.backendUrl+'/save', JSON.stringify(payload))
    },
    async load(context, uuid){
        let savedData = await axios.post(config.backendUrl+'/load', JSON.stringify({uuid}))
        context.commit('loadSave', savedData.data.response.data)
    }
}
