import Vue from 'vue'

class MobFactory {
    constructor(){}
    getMob(hp){
        return Vue.observable({
            name:"test mob",
            hp,
            gold:hp
        })
    }
}

export default MobFactory