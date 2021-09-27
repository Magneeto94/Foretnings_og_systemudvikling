class Swallow {
	energy = 0
	citiesVisited = []
    currentLocation = undefined
    constructor(aLocation) {
        this.changeLocation(aLocation)
    }
	eat(grams) {
		this.energy = this.energy + grams * 4
	}
	fly(kilometers) {
		this.energy = this.energy - kilometers * 2
	}
	visit(newLocation) {
		let kilometersToFly = 
			newLocation.distanceTo(this.currentLocation)
		this.fly(kilometersToFly)
		this.changeLocation(newLocation)
	}
    changeLocation(aLocation) {
        this.currentLocation = aLocation
		this.citiesVisited.push(aLocation)
    }
}

class Hummingbird extends Swallow {
	eat(grams) {
		this.energy = this.energy + grams * 3
	}
	fly(kilometers) {
		this.energy = this.energy - kilometers * 6
	}
}

class City {
	constructor(name) {
		this.name = name
	}
	distanceTo(anotherCity) {
		return 350
	}
}

let cph = new City("Copenhagen")
let aarhus = new City("Aarhus")

let pepita = new Swallow(aarhus)
console.log(pepita)
pepita.eat(20)
console.log(pepita)
pepita.fly(100)
console.log(pepita)

console.log(pepita)
pepita.visit(cph)

console.log(pepita)

let cheerpy = new Hummingbird(cph)
console.log(cheerpy)
cheerpy.visit(aarhus)
console.log(cheerpy)