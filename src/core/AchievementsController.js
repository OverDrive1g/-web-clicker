class AchievementsController{
    constructor(){
        this.showSnackbar = (message) =>{console.log(message)}
    }

    clicksListener(newClicks){
        switch(newClicks){

            case 1:
                this.showSnackbar("Wake up and clicks")
                break
            case 10:
                this.showSnackbar("I'm starting to get used to")
                break
            case 100:
                this.showSnackbar("Wow, this is cool")
                break
            case 1000:
                this.showSnackbar("I did not sleep for two days")
                break
            case 10000:
                this.showSnackbar("mmmm")
                break
            case 100000:
                this.showSnackbar("Overdose")
                break
            case 1000000:
                this.showSnackbar("Oh yes, do not stop")
                break
            case 10000000:
                this.showSnackbar("AAAAAAAAA")
                break
            case 100000000:
                this.showSnackbar("You can not stop")
                break
            case 1000000000:
                this.showSnackbar("CLICKS UNTIL THE END")
                break
            case 10000000000:
                this.showSnackbar("How?")
                break
            case 100000000000:
                this.showSnackbar("He is controlled by all the clicks of the world")
                break
            case 1000000000000:
                this.showSnackbar("WE NEED MORE CLICKS")
                break
            case 10000000000000:
                this.showSnackbar("PANIC!!!!")
                break
            case 100000000000000:
                this.showSnackbar("Where I am?")
                break
            case 1000000000000000:
                this.showSnackbar("How did you get here?")
                break
            case 10000000000000000:
                this.showSnackbar("Okay ending")
                break
            case 100000000000000000:
                this.showSnackbar("Well, no, I'm serious")
                break
            case 1000000000000000000:
                this.showSnackbar("STOP")
                break
            case 10000000000000000000:
                this.showSnackbar("You exceeded the limit will now be fucked")
                break
        }
    }
}

export default AchievementsController