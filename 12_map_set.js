const map = new Map(
    [ ['a', 1] ]
)

// console.log(map.get('a'))
map.set('b', 2).set('c', 3).set('NaN', NaN)

/*
console.log(map)
console.log(map.get('NaN'))
// map.clear()
console.log(map.has('NaN'))
console.log(map.has('42'))
// console.log(map.delete('b'))
console.log(map.size) 
*/

/* 
console.log(map.keys())
console.log(map.values())
console.log(map.entries()) 
*/

// Set
const set = new Set([1, 2, 3, 5, 5, 8, 13, 13, 13])

console.log(set)
console.log(set.size)
console.log(set.add(21))
// set.clear()
set.delete(1)
console.log(set)

console.log(set.keys())
console.log(set.values())
console.log(set.entries())