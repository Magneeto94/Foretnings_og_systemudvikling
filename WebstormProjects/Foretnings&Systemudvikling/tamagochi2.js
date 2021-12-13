//Creating the class mascot:
class Mascot {
    //Defining a count variables to keeps track of A mascot's level
    level = 0

    //Defining a variable to keep track of a mascot's currentState. The "new" refers to this being a constructor.
    //The "this" refering to a given mascot, that will be created from this class (i have created bobo).
    currentState = new Happy(this) // New currentState which start by being happy for any mascot i created


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


    //Method for changing the mascots state.
    change(state){
        this.currentState = state
    }

    //Eating method
    eat() {
        //Changes the currentState of the mascot
        this.currentState.makeMascotEat()
    }


    //Playing method
    play() {
        //changes the currentState of the mascot
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


// Extending the MoodState class, so this one has the same properties as MoodState.
class Bored extends MoodState {

    //Creating a method, that decides what happens to the mascot when it eats in its bored state.
    makeMascotEat(){
        //logging a message telling that the mascot can not eat, before an hour has past.
        console.log("Mascot is Bored and will not eat. Wait 1 hour.")
        //Creating a for loop to simulate one hour
        for (let i = 60 ; i>=0; i-=10){
            console.log(i)
        }
        //Logging a new message, telling that one hour has past and the mascot's state changes.
        console.log("One hour has past, the mascot is not bored anymore, and has turned happy")
        //changing mascot state
        this.myMascot.change(new Happy(this.myMascot))
    }

    //Creating a method, that decides what happens to the mascot when it plays in its bored state.
    //same principle as above.
    makeMascotPlay(){

        //The method makeMascotHappy are called on myMascot
        console.log("Mascot is Bored and will not play. Wait 1 hour.")
        for (let i = 60 ; i>=0; i-=10){
            console.log(i)
        }
        console.log("One hour has past, the mascot is not bored anymore and has turned happy")
        this.myMascot.change(new Happy(this.myMascot))
    }
}



// Extending the MoodState class, so this one has the same properties.
class Hungry extends MoodState {

    //Method for making the mascot eat in it's Hungry state.
    makeMascotEat(){
        //The change method is used to change the mascot's state.
        this.myMascot.change(new Happy(this.myMascot))
    }

    //Method for making the mascot play in it's Hungry state.
    makeMascotPlay(){
        // A messeage is loged to the console when the mascot tries to play in it's hungry state.
        console.log("Mascot is hungry. Mascot can not play while being hungry")

    }

}



// Extending the MoodState class, so this one has the same properties.
class Happy extends MoodState {

    //Creating an eat and play counter to keep track of the number of times the mascot has eaten or played in a row.
    eatCount = 0
    playCount = 0

    //Method to make mascot eat.
    makeMascotEat(){
        // When this method is called we increase eatCount by 1
        this.eatCount = this.eatCount + 1;
        //If the eat count reaches 2
        if (this.eatCount === 2) {
            // the mascots state is changed to bored
            this.myMascot.change(new Bored(this.myMascot))
            //After this message is called we reset the eatcount to 0 again.
            this.eatCount = 0
            //If the eatCount has not reached 2 yet, increaseLevelByOne is called to increase the mascot's level
        } else{
            this.myMascot.increaseLevelByOne()
        }
    }

    //This method is made following the same priciple as the one above.
    makeMascotPlay(){
        this.playCount = this.playCount + 1;
        if(this.playCount === 2){
            this.myMascot.change(new Hungry(this.myMascot))
            this.playCount = 0
        } else{
            this.myMascot.increaseLevelByTwo()
        }
    }

}

//Testing a new mascot.
let bobo = new Mascot()

bobo.eat()
bobo.eat()
bobo.eat()
bobo.play()
bobo.play()
bobo.play()
bobo.play()
bobo.eat()
bobo.eat()
bobo.eat()
bobo.eat()
bobo.eat()
bobo.eat()
console.log(bobo)

