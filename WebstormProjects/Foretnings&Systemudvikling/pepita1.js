class Swallow {
	energy = 0
	// constructor() {
	// 	this.energy = 0
	// }
	eat(grams) {
		this.energy = this.energy + grams * 4
	}
	fly(kilometers) {
		this.energy = this.energy - kilometers * 2
	}
}

let pepita = new Swallow()
console.log(pepita)
pepita.eat(20)
console.log(pepita)
pepita.fly(100)
console.log(pepita)