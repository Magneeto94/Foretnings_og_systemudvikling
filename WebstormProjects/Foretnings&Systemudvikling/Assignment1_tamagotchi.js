class Mascot {

    //Defining count variables:
    level = 0


    currentState = new Happy(this)
    change(state) {
// limits number of changes
        this.currentState = state
    }

    //Method to increse level by 1
    increaseLevelByOne(){
        this.level = this.level+1
    }

    //Method to increse level by 2
    increaseLevelByTwo(){
        this.level = this.level+2
    }

    makeMascotHappy(){
        this.currentState = new Happy(this)
    }

    makeMascotBored(){
        this.currentState = new Bored(this)
    }

    makeMascotHungry(){
        this.currentState = new Hungry(this)
    }

    // Eating method
    eat() {
        //Currentstate refererer til Happy lige nu.
        this.currentState.makeMascotEat()

    }

    //Playing method
    play() {
        this.currentState.makeMascotPlay()

    }

}


class Mood_State {
    constructor(myMascot) {
        this.myMascot = myMascot
    }
}


class Bored extends Mood_State {
    //Save the data for the time that the mascot becomes bored.
    boredTime = new Date()


    makeMascotEat(){
        console.log("Mascot is Bored and will not eat!!!")
    }

    makeMascotPlay(){
        this.myMascot.makeMascotHappy()
    }


}




class Hungry extends Mood_State {

    makeMascotEat(){
        this.myMascot.makeMascotHappy()
    }

    makeMascotPlay(){
        console.log("Mascot is hungry. Mascot can not play while being hungry")
    }

}




class Happy extends Mood_State {

    eatCount = 0
    playCount = 0

    makeMascotEat(){

        this.eatCount = this.eatCount + 1;
        if (this.eatCount = 2) {
            this.myMascot.makeMascotBored()
            this.eatCount = 0
        } else{
            this.myMascot.increaseLevelByOne()
        }
    }

    makeMascotPlay(){
        this.playCount = this.playCount + 1;
        if(this.playCount = 2){
            this.myMascot.makeMascotHungry()
            this.playCount = 0
        } else{
            this.myMascot.increaseLevelByTwo()
        }
    }


}

//Test
let bobo = new Mascot()
console.log(bobo)
bobo.play()
bobo.play()
bobo.play()
bobo.play()
console.log(bobo)