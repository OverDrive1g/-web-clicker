import Vue from 'vue'

class MobFactory {
    constructor() {
        this.mobs = [
            "Onzuarosh",
            "Adomonius",
            "Broized, the Deathlord",
            "Tzofiya",
            "Iciclis",
            "Rhioncekh Ranvru",
            "Ger'axud",
            "Xagthamen",
            "Venomcreep",
            "Netherscream",
            "Abysspaw",
            "Zaamissaa",
            "Ialee"
        ]
    }

    getMob(lvl, isBoss) {
        let hp =this.getHpByLvl(lvl, isBoss)
        let gold = this.getGold(lvl)
        let mob = {
            name: this.mobs[Math.floor(Math.random() * this.mobs.length)],
            hp,
            gold,
            isBoss
        }
        return Vue.observable(mob)
    }

    /**
     *
     * @param lvl уровень монстра > 0
     * @param isBoss являеться ли создаваемый монстр боссом
     * @returns {number}
     */
    getHpByLvl(lvl, isBoss) {
        if (lvl < 140) {
            return Math.ceil(10 * (lvl - 1 + Math.pow(1.55, lvl - 1)) * (isBoss ? 10 : 1))
        } else if (lvl >= 140 && lvl < 500) {
            return Math.ceil(10 * (139 + Math.pow(1.55, 139) * Math.pow(1.145, lvl - 140)) * (isBoss ? 10 : 1))
        } else if (lvl >= 500 && lvl < 200000) {
            let p = 1
            for (let i = 501; i < lvl; i++) {
                p *= (1.145 + 0.001 * Math.floor((i - 1) / 500))
            }
            return Math.ceil(10 * (139 + Math.pow(1.55, 139) * Math.pow(1.145, 360)) * p * (isBoss ? 10 : 1))
        } else {
            return Math.ceil((Math.pow(1.545, lvl - 20001) * 1.240 * Math.pow(10, 25409) + ((lvl - 1) * 10)))
        }
    }
    getGold(lvl){
        return 10*(lvl-1+Math.pow(1.18, lvl-1))
    }
}

export default MobFactory
