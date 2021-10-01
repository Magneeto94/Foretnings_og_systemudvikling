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

// Creating a new class that should be extended to 3 subclasses below: Bored, Hungry and Happy.
class MoodState {
    //The constructor function decides what mood myMascot should have.
    constructor(myMascot) {
        this.myMascot = myMascot
    }
}


// Extending the MoodState class, so this one has the same properties.
class Bored extends MoodState {

    //Creating a method, that decides what happens to the mascot when it eats in its happy state.
    makeMascotEat(){

        let timer = 10;
        function startTimer() {
            let countdownTimer = setInterval(function() {

                console.log(timer);
                timer = timer - 1;
                if (timer <= 0) {
                    clearInterval(countdownTimer);
                    this.currentState = new Happy (this)
                    console.log("Now 1 hour has passed and your mascot is now state (Happy)")

                }

            }, 1000);
        }
        startTimer();

        //A console log message is send when this method is called in this state.
        console.log("Mascot is Bored and will not eat!!!")
    }

    //Creating a method, that decides what happens to the mascot when it plays in its happy state.
    makeMascotPlay(){
        //The method makeMascotHappy are called on myMascot
        this.myMascot.makeMascotHappy()
    }


}



// Extending the MoodState class, so this one has the same properties.
class Hungry extends MoodState {

    //Method for making the mascot eat in it's Hungry state.
    makeMascotEat(){
        //The method makeMascotHappe are called, when my mascot eats in this state.
        this.myMascot.makeMascotHappy()
    }

    //Method for making the mascot play in it's Hungry state.
    makeMascotPlay(){
        // A messeage is loged to the console when makeMascotPlay is called in this state.
        console.log("Mascot is hungry. Mascot can not play while being hungry")
    }

}



// Extending the MoodState class, so this one has the same properties.
class Happy extends MoodState {

    //Creating an eat and play counter to ceep track of the times the mascot hat eaten or played in a row.
    eatCount = 0
    playCount = 0

    //Method to make mascot eat.
    makeMascotEat(){

        // When this method is called we increase eatCount by 1
        this.eatCount = this.eatCount + 1;
        //If the eat count reaches 2, the method makeMascotBored, is called on myMascot.
        if (this.eatCount === 2) {
            this.myMascot.makeMascotBored()
            //After this that message is called we reset the eatcount to 0 again.
            this.eatCount = 0
            //If the eatCount has not reached 2 yet, we call the increaseLevelByOne on myMascot
        } else{
            this.myMascot.increaseLevelByOne()
        }
    }

    //This message is made following the same priciple as the one above.
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




let bobo = new Mascot()
console.log(bobo)
bobo.eat()
bobo.eat()
bobo.eat()
console.log(bobo)
console.log(bobo)