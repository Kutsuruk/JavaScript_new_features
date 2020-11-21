const vlidator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Filed ${prop} in object is no!`
    },
    set(target, prop, value) {
        if(value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log(`Lenght must be more than 2 char, now ${value.length}`)
        }
    } 
}

const form = {
    login: 'tester',
    password: '12345',
}

const formProxy = new Proxy(form, vlidator)

// console.log(formProxy)
// console.log(formProxy.login)
// console.log(formProxy.password)
// console.log(formProxy['user'])

// formProxy.password = '12'

// console.log(formProxy.password)

function log(message) {
    console.log('[Log]: ', message)
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if(argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log('Amount of arguments if different!')
        }
    }
})

proxy('Custom message')
proxy('Message', 2)