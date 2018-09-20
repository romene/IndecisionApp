const add =  (a,b) => a + b 

console.log( add(9, 1))


const user = {
    name: 'Rogerio Freitas',
    cities: ['Salvador', 'Dublin', 'Vancouver', 'Chiang Mai'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log (user.printPlacesLived())



const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: [2],
    multiply() {
        return this.numbers.map( (number) => {
            return number * this.multiplyBy
        })
    }
}
console.log(multiplier.multiply())