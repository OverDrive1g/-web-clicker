import DamageController from "../core/DamageController"
import MobFactory from "../core/MobFactory"

export class MainController{
    constructor(attack, incGold, onGenerateMob, incLvl, getLvl){
        this.damageConstroller = new DamageController()
        this.mobFactory = new MobFactory()
        this.incGold = incGold
        this.onGenerateMob = onGenerateMob
        this.incLvl = incLvl
        this.getLvl = getLvl
        this.generateMob(attack)
    }

    onClick(attack){
        let damage = this.damageConstroller.getDamageByAttack(attack)
        this.curentMob.hp -=damage
        if(this.curentMob.hp <= 0){
            this.incLvl()
            this.incGold(this.curentMob.gold)
            this.generateMob(this.getLvl())
        }
    }
    generateMob(lvl){
        this.curentMob = this.mobFactory.getMob(lvl)
        this.onGenerateMob(this.curentMob)
    }
}
