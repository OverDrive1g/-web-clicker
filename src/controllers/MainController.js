import DamageController from "../core/DamageController"
import MobFactory from "../core/MobFactory"

export class MainController{
    constructor(attack, increment, onGenerateMob){
        this.damageConstroller = new DamageController()
        this.mobFactory = new MobFactory()
        this.increment = increment
        this.onGenerateMob = onGenerateMob
        this.generateMob(attack)
    }

    onClick(attack){
        let damage = this.damageConstroller.getDamageByAttack(attack)
        this.curentMob.hp -=damage
        if(this.curentMob.hp <= 0){
            this.increment(this.curentMob.gold)
            this.generateMob(attack)
        }
    }
    generateMob(attack){
        this.curentMob = this.mobFactory.getMob(attack*10)
        this.onGenerateMob(this.curentMob)
    }
}