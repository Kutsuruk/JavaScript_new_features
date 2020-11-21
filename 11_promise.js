const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Success!')
    }, 500)
})

const delay = ms => new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve(`Done after ${ms / 1000} seconds!`)
    }, ms)
})

/* console.log(delay(2000)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))
) */

/* async function asyncDelay() {
    try {
        const data = await delay(2000)
        console.log(data)
    }  catch(e) {
        console.log('Error', e)
    }
}

console.log(asyncDelay()) */


Promise.all([  // waiting for all promises done
    delay(3000), delay(500), delay(2000)
]).then( data => console.log(data))

Promise.race([  // waiting for faster promise done
    delay(3000), delay(500), delay(2000)
]).then( data => console.log(data))