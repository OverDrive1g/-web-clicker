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
                this.showSnackbar("I did not sleep for two days","alarm")
                this.setReward({type:"coin", count:500})
                break
            case 10000:
                this.showSnackbar("mmmm","pan_tool")
                this.setReward({type:"coin", count:5000})
                break
            case 100000:
                this.showSnackbar("Overdose","gavel")
                this.setReward({type:"coin", count:50000})
                break
            case 1000000:
                this.showSnackbar("Oh yes, do not stop","adjust")
                this.setReward({type:"coin", count:500000})
                break
            case 10000000:
                this.showSnackbar("AAAAAAAAA","format_color_text")
                this.setReward({type:"coin", count:5000000})
                break
            case 100000000:
                this.showSnackbar("You can not stop","tag_faces")
                this.setReward({type:"coin", count:50000000})
                break
            case 1000000000:
                this.showSnackbar("CLICKS UNTIL THE END","send")
                this.setReward({type:"coin", count:500000000})
                break
            case 10000000000:
                this.showSnackbar("How?","whatshot")
                this.setReward({type:"coin", count:5000000000})
                break
            case 100000000000:
                this.showSnackbar("He is controlled by all the clicks of the world","public")
                this.setReward({type:"coin", count:50000000000})
                break
            case 1000000000000:
                this.showSnackbar("WE NEED MORE CLICKS","exposure_plus_1")
                this.setReward({type:"coin", count:500000000000})
                break
            case 10000000000000:
                this.showSnackbar("PANIC!!!!","wifi_off")
                this.setReward({type:"coin", count:5000000000000})
                break
            case 100000000000000:
                this.showSnackbar("Where I am?","nature_people")
                this.setReward({type:"coin", count:50000000000000})
                break
            case 1000000000000000:
                this.showSnackbar("How did you get here?","directions_run")
                this.setReward({type:"coin", count:500000000000000})
                break
            case 10000000000000000:
                this.showSnackbar("Okay ending","work_off")
                this.setReward({type:"coin", count:5000000000000000})
                break
            case 100000000000000000:
                this.showSnackbar("Well, no, I'm serious","cloud_off")
                this.setReward({type:"coin", count:50000000000000000})
                break
            case 1000000000000000000:
                this.showSnackbar("STOP","sentiment_satisfied")
                this.setReward({type:"coin", count:500000000000000000})
                break
            case 10000000000000000000:
                this.showSnackbar("You exceeded the limit will now be fucked","import_contacts")
                this.setReward({type:"coin", count:5000000000000000000})
                break
        }
    }
}

export default AchievementsController
