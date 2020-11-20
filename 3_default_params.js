let defaultB = 30 
const defaultA = (d, c) => d * c


function compute(a = defaultA(10, 10), b = defaultB) {
    return a + b
}

console.log(compute())
console.log(compute(10))
console.log(compute(10, 40))