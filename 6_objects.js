const cityField = 'city'
const job = 'Web-developer'

const person = {
    name: 'Vitalii',
    age: 19,
    job,
    'country-born': 'Ukraine',
    [cityField]: 'New-York',
    car: 'BMW',
    'has-girlfriend': true,
    isMarried: false,
    print: () => 'Person',
    toString() {
        return Object
            .keys(this)
            .filter(key => key !== 'toString' && key !== 'print')
            .map(key => this[key])
            .join(' ')
    }
}

// console.log(person)
// console.log(person.toString())
// console.log(person.print())

// Methods
const first = {a: 1}
const second = {b: 2}

// console.log(Object.is(20, 20))
const obj = Object.assign({}, first, second, {c: 3, d: 4})

console.log(obj)
console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))

