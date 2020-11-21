const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol)
// console.log(other)

// console.log(symbol == other)
// console.log(symbol === other)

const person = {
    name: 'Anastasia',
    [symbol]: 'meta'
}

console.log(person)
console.log(person[symbol])
console.log(person[other])

for(let key in person) {
    console.log(key)
}