//Defining function:
function pepita_energi(seeds, km){

    //Defining energi intake
    let energi_intake = seeds*4

    //Defining energi decrease
    let energi_decrease = km*2

    // Defining the return of the function:
    return(`Stored in pepita is ${energi_intake-energi_decrease} jules`)
}

// Pringting the result to the console
// The user has to type in how many seeds the bird eats and how many km it flies down under.
console.log(pepita_energi(4,3))