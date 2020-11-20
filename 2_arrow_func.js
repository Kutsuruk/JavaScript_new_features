/* function sum(a, b) {
    return a + b
}

function cube(a) {
    return a ** 3
}

let sum = (a, b) => {
    return a + b
}

let cube = a => a ** 3

console.log(sum(2, 3))
console.log(cube(2)) */

/* setTimeout(function() {
    console.log('After 1 second')
}, 1000)

setTimeout(() => console.log('After 1 second'), 1000) */

// Context 
function log() {
    console.log(this)
}

let arrowLog = () => console.log(this)

const person = {
    name: 'Vitalii',
    age: 19,
    log: log,
    arrowLog: arrowLog,
    delayLog: function() {
        /* const self = this */ // if we use non arrow func
        setTimeout(() => {
            console.log(this.name + ' ' + this.age)
        }, 500)
    }
}

/* person.log()
person.arrowLog() */
person.delayLog()