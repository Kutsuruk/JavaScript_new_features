// Rest
function average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
}
//console.log(average([10, 20, 30, 40]))

// Spread
// const array  = [1, 2, 3, 5, 8, 13]
// console.log(...array)
// console.log(Math.max(...array)) // find highest value of array
// console.log(Math.min(...array)) // find lowest value of array

// const fib = [1, ...array]
// console.log(fib)

// Destructuring
const array  = [1, undefined, 3, 5, 8, 13]

// const a = array[0]
// const b = array[1]
// const [a, b = 42, ...c] = array
// console.log(a, b, c)

// const [a, , c] = array
// console.log(a, c)

// Object

const address = {
    country: 'USA',
    city: 'New-York',
    street: 'Sanderles',
    concat() {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}

// const {country = 'Sweden', city = 'Stockholm', street = 'Kontilantie', concat: addressConcat} = address

// console.log(country, city, street)
// console.log(addressConcat.call(address))

/* const {city, ...rest} = address
console.log(city)
console.log(rest)

const newAddress = {...address, country: 'Finland', city: 'Helsinki', street: 'Karhuapio', code: 368} // copy of object address with spread operator

console.log(newAddress)
console.log(newAddress.concat()) */

// console.log(address.concat())

