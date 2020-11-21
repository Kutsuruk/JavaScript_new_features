class Person {
    type = 'human'

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, My name is ${this.name} and I'am ${this.age} years old!`)
    }
}

let user = new Person('Vitalii', 19)

// console.log(user)
// console.log(user.type)
// console.log(user.__proto__ === Person.prototype)
// console.log(user.greet())

class Programmer extends Person {
    constructor(name, age, job) {
        super(name, age)
        this._job = job
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        if(job.length < 2) {
            throw new Error('Validation failed!')
        }
        this._job = job
    }

    greet() {
        super.greet()
        console.log(`Hello, I'am hacker ${this.name}`)
    }
}

let hacker = new Programmer('Jack', 22, 'Frontend')

console.log(hacker)
console.log(hacker.greet())
console.log(hacker.job)
hacker.job = 'Backend'
console.log(hacker.job)