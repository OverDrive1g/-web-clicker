class AchievementsController{
    constructor(){
        this.showSnackbar = (message) =>{console.log(message)}
        this.setReward = (rewardData)=>{console.log(rewardData)}
    }

    clicksListener(newClicks){
        switch(newClicks){

            case 1:
                this.showSnackbar("Wake up and clicks")
                this.setReward({type:"coin", count:14})
                break
            case 10:
                this.showSnackbar("I'm starting to get used to")
                this.setReward({type:"coin", count:20})
                break
            case 100:
                this.showSnackbar("Wow, this is cool")
                this.setReward({type:"coin", count:50})
                break
            case 1000:
                this.showSnackbar("I did not sleep for two days")
                this.setReward({type:"coin", count:500})
                break
            case 10000:
                this.showSnackbar("mmmm")
                this.setReward({type:"coin", count:5000})
                break
            case 100000:
                this.showSnackbar("Overdose")
                this.setReward({type:"coin", count:50000})
                break
            case 1000000:
                this.showSnackbar("Oh yes, do not stop")
                this.setReward({type:"coin", count:500000})
                break
            case 10000000:
                this.showSnackbar("AAAAAAAAA")
                this.setReward({type:"coin", count:5000000})
                break
            case 100000000:
                this.showSnackbar("You can not stop")
                this.setReward({type:"coin", count:50000000})
                break
            case 1000000000:
                this.showSnackbar("CLICKS UNTIL THE END")
                this.setReward({type:"coin", count:500000000})
                break
            case 10000000000:
                this.showSnackbar("How?")
                this.setReward({type:"coin", count:5000000000})
                break
            case 100000000000:
                this.showSnackbar("He is controlled by all the clicks of the world")
                this.setReward({type:"coin", count:50000000000})
                break
            case 1000000000000:
                this.showSnackbar("WE NEED MORE CLICKS")
                this.setReward({type:"coin", count:500000000000})
                break
            case 10000000000000:
                this.showSnackbar("PANIC!!!!")
                this.setReward({type:"coin", count:5000000000000})
                break
            case 100000000000000:
                this.showSnackbar("Where I am?")
                this.setReward({type:"coin", count:50000000000000})
                break
            case 1000000000000000:
                this.showSnackbar("How did you get here?")
                this.setReward({type:"coin", count:500000000000000})
                break
            case 10000000000000000:
                this.showSnackbar("Okay ending")
                this.setReward({type:"coin", count:5000000000000000})
                break
            case 100000000000000000:
                this.showSnackbar("Well, no, I'm serious")
                this.setReward({type:"coin", count:50000000000000000})
                break
            case 1000000000000000000:
                this.showSnackbar("STOP")
                this.setReward({type:"coin", count:500000000000000000})
                break
            case 10000000000000000000:
                this.showSnackbar("You exceeded the limit will now be fucked")
                this.setReward({type:"coin", count:5000000000000000000})
                break
        }
    }
}

export default AchievementsController