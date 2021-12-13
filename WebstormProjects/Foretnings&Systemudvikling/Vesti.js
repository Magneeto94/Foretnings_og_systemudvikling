// A mascot can be bored,
// hungry or happy; this affects the
// mascot behavior

class Mascot {
    level = 0
    eatCount = 0
    playCount = 0
    currentState = new Happy(this)

    change(State) {
        this.currentState = State
    }
    eat() {
        this.currentState.makeTheMascotEat()

    }
    play() {
        this.currentState.makeTheMascotPlay()
    }
    increaseLevelBy(amount) {
        this.level = this.level + amount
    }
    increaseEatCount(j) {
        this.eatCount = this.eatCount + j
    }
    increasePlayCount(k) {
        this.playCount = this.playCount + k
    }
}

class State {
    constructor(anInstanceOfTheClassMascot) {
        this.myMascot = anInstanceOfTheClassMascot
    }
}

//If it was bored, there are two cases
// It was bored more than one hour, then it becomes happy
// It was bored less than an hour, just log a message
// saying that the mascot will not eat
class Bored extends State {
    makeTheMascotEat() {
        startTimer()
        // It will not eat when it's bored

    }
    makeTheMascotPlay() {
        // Gets happy (change state to happy)
        //this.myMascot.increasePlayCount(1)
        this.myMascot.currentState = new Happy(this)
    }
}
class Happy extends State {
    makeTheMascotEat() {
        //If it is happy then its level increases by one
        this.myMascot.increaseLevelBy(1)
        this.myMascot.increaseEatCount(1)
//If it is eating two times in a row when it's happy, then it gets bored
        if (this.myMascot.eatCount >= 2){
            this.myMascot.currentState = new Bored(this)
            clearInterval(this.myMascot.eatCount)
        }

    }
    makeTheMascotPlay() {
        //Level + 2
        this.myMascot.increaseLevelBy(2)
        this.myMascot.increasePlayCount(1)
        //Play 2 times = hungry
        if (this.myMascot.playCount >= 2){
            this.myMascot.currentState = new Hungry(this)
            clearInterval(this.myMascot.playCount)
        }

    }
}
class Hungry extends State {
    makeTheMascotEat() {
        //If it is hungry then it becomes happy
        //this.state.change(Happy)
        this.myMascot.currentState = new Happy(this)
        this.myMascot.increaseEatCount(1)

    }
    makeTheMascotPlay() {
        //Log that it can't play when hungry
        console.log("Mascot will not play when hungry")
    }
}
// Timer for one hour (Afterwards = happy)
function startTimer() {
    let i = 30;
    let countdownTimer = setInterval(function() {
        console.log(i);
        i = i - 1;
        if (i <= 0) {
            clearInterval(countdownTimer);
            this.myMascot.currentState = new Bored(this)
        }
    }, 1000);
    console.log("Mascot will not eat when it's bored. Wait one hour(30 sec)")

}

//Test
let karsten = new Mascot()
karsten.eat()
console.log(karsten)

karsten.play()
console.log(karsten)

karsten.eat()
console.log(karsten)

karsten.play()
console.log(karsten)

karsten.eat()
console.log(karsten)