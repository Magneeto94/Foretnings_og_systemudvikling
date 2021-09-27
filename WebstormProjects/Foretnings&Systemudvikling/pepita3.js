class Swallow {
	energy = 0
	citiesVisitedIDontKnow = []
	// constructor() {
	// 	this.energy = 0
	// }
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
		this.currentLocation = newLocation
		this.citiesVisitedIDontKnow.push(newLocation)
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

let pepita = new Swallow()
console.log(pepita)
pepita.eat(20)
console.log(pepita)
pepita.fly(100)
console.log(pepita)

let cph = new City("Copenhagen")
let aarhus = new City("Aarhus")

pepita.currentLocation = aarhus

console.log(pepita)
pepita.visit(cph)

console.log(pepita)

let cheerpy = new Hummingbird(cph)
console.log(cheerpy)
cheerpy.visit(aarhus)
console.log(cheerpy)