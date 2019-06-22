class AchievementsController{
    constructor(){
        this.showSnackbar = (message, icon) =>{console.log(message,icon)}
        this.setReward = (rewardData)=>{console.log(rewardData)}
    }

    clicksListener(newClicks){
        switch(newClicks){
            case 1:
                this.showSnackbar("Wake up and clicks","accessible_forward")
                this.setReward({type:"coin", count:14})
                break
            case 10:
                this.showSnackbar("I'm starting to get used to","directions_walk")
                this.setReward({type:"coin", count:20})
                break
            case 100:
                this.showSnackbar("Wow, this is cool","mood")
                this.setReward({type:"coin", count:50})
                break
            case 1000:
                this.showSnackbar("I did not sleep for two days","info")
                this.setReward({type:"coin", count:500})
                break
            case 10000:
                this.showSnackbar("mmmm","info")
                this.setReward({type:"coin", count:5000})
                break
            case 100000:
                this.showSnackbar("Overdose","info")
                this.setReward({type:"coin", count:50000})
                break
            case 1000000:
                this.showSnackbar("Oh yes, do not stop","info")
                this.setReward({type:"coin", count:500000})
                break
            case 10000000:
                this.showSnackbar("AAAAAAAAA","info")
                this.setReward({type:"coin", count:5000000})
                break
            case 100000000:
                this.showSnackbar("You can not stop","info")
                this.setReward({type:"coin", count:50000000})
                break
            case 1000000000:
                this.showSnackbar("CLICKS UNTIL THE END","info")
                this.setReward({type:"coin", count:500000000})
                break
            case 10000000000:
                this.showSnackbar("How?","info")
                this.setReward({type:"coin", count:5000000000})
                break
            case 100000000000:
                this.showSnackbar("He is controlled by all the clicks of the world","info")
                this.setReward({type:"coin", count:50000000000})
                break
            case 1000000000000:
                this.showSnackbar("WE NEED MORE CLICKS","info")
                this.setReward({type:"coin", count:500000000000})
                break
            case 10000000000000:
                this.showSnackbar("PANIC!!!!","info")
                this.setReward({type:"coin", count:5000000000000})
                break
            case 100000000000000:
                this.showSnackbar("Where I am?","info")
                this.setReward({type:"coin", count:50000000000000})
                break
            case 1000000000000000:
                this.showSnackbar("How did you get here?","info")
                this.setReward({type:"coin", count:500000000000000})
                break
            case 10000000000000000:
                this.showSnackbar("Okay ending","info")
                this.setReward({type:"coin", count:5000000000000000})
                break
            case 100000000000000000:
                this.showSnackbar("Well, no, I'm serious","info")
                this.setReward({type:"coin", count:50000000000000000})
                break
            case 1000000000000000000:
                this.showSnackbar("STOP","info")
                this.setReward({type:"coin", count:500000000000000000})
                break
            case 10000000000000000000:
                this.showSnackbar("You exceeded the limit will now be fucked","info")
                this.setReward({type:"coin", count:5000000000000000000})
                break
        }
    }
}

export default AchievementsController
