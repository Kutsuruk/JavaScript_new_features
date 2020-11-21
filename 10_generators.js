const array = [10, 20, 30, 40]
const string = 'Hello'

// console.log(array[Symbol.iterator])
// console.log(string[Symbol.iterator])

// const iterArr = array[Symbol.iterator]()
// const iterStr = string[Symbol.iterator]()

// console.log(iterArr.next())
// console.log(iterArr.next())
// console.log(iterArr.next())
// console.log(iterArr.next())
// console.log(iterArr.next())

// console.log(iterStr.next())
// console.log(iterStr.next())
// console.log(iterStr.next())
// console.log(iterStr.next())
// console.log(iterStr.next())
// console.log(iterStr.next())

// for (let item of array) {
//     console.log(item)
// }

// for(let char of string) {
//     console.log(char)
// }


/* const country = {
    values: ['Finland', 'Sweden', 'China', 'USA', 'England'],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                const value = this.values[i]
                i++
                return {
                    done: i > this.values.length,
                    value,
                }
            }
        }
    }  
}

for(let item of country) {
    console.log(item)
} */


// Generator
function *gen(num = 4) {
    for(let i; i < num; i++) {
        yield i 
    }
}

const iter = gen(3)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

for(let i of gen(4)) {
    console.log(i)
}