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

