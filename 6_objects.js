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

