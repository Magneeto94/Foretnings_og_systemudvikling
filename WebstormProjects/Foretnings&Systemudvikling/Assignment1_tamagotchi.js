//Creating the class mascot:
class Mascot {

    //Defining a count variables to ceep track of A mascot's level:
    level = 0

    //Defining a variable to keep track of a mascot's currentState. The "new" refers to this being a constructor.
    //The "this" refering to a given mascot, that will be created from this class (i have created bobo).
    currentState = new Happy(this) // Translatede to human language: new currentstate which start by being happy for this mascot i create (bobo)

    //We create the method change for changing the mascots currentState
    /*change(state) {
        //The value of currentState is replaced with state.
        this.currentState = state
    }*/

    //Method to increse level by 1
    increaseLevelByOne(){
        //the level of the mascot + 1 overwrites the current level.
        this.level = this.level+1
    }

    //Method to increse level by 2
    increaseLevelByTwo(){
        //the level of the mascot + 2 overwrites the current level.
        this.level = this.level+2
    }

    //Method for making mascot happy
    makeMascotHappy(){
        // the current state is overritten with Happy. This function is not meant to be called by a user.
        this.currentState = new Happy(this)
    }

    //Method for making mascot bored
    makeMascotBored(){
        // the current state is overritten with Bored. This function is not meant to be called by a user.
        this.currentState = new Bored(this)
    }

    //Method for making mascot Hungry
    makeMascotHungry(){
        // the current state is overritten with Hungry. This function is not meant to be called by a user.
        this.currentState = new Hungry(this)
    }

    // Eating method
    eat() {
        //_____________________________________________
        this.currentState.makeMascotEat()
    }

    //Playing method
    play() {
        //______________________________________________
        this.currentState.makeMascotPlay()

    }

}

// Creating a new class to control the mood state of the mascot. a super class
class MoodState {
    constructor(myMascot) {
        this.myMascot = myMascot
    }
}

// Extending the MoodState class, so this one has the same properties.
class Bored extends MoodState {
    //Save the data for the time that the mascot becomes bored.
    boredTime = new Date()


    makeMascotEat(){
        console.log("Mascot is Bored and will not eat!!!")
    }

    makeMascotPlay(){
        this.myMascot.makeMascotHappy()
    }


}



// Extending the MoodState class, so this one has the same properties.
class Hungry extends MoodState {

    makeMascotEat(){
        this.myMascot.makeMascotHappy()
    }

    makeMascotPlay(){
        console.log("Mascot is hungry. Mascot can not play while being hungry")
    }

}



// Extending the MoodState class, so this one has the same properties.
class Happy extends MoodState {

    eatCount = 0
    playCount = 0

    makeMascotEat(){

        this.eatCount = this.eatCount + 1;
        if (this.eatCount === 2) {
            this.myMascot.makeMascotBored()
            this.eatCount = 0
        } else{
            this.myMascot.increaseLevelByOne()
        }
    }

    makeMascotPlay(){
        this.playCount = this.playCount + 1;
        if(this.playCount === 2){
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
bobo.eat()
bobo.play()
bobo.play()
console.log(bobo)
bobo.eat()
console.log(bobo)