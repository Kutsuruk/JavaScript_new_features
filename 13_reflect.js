class Student {
    constructor(name, faculty) {
        this.name = name
        this.faculty = faculty
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

class ProtoStudent {
    university = 'Oxford'
} 

const student = Reflect.construct(Student, ['Vitalii', 'Computer science'])

console.log(student)
// console.log(student.__proto__ === Student.prototype)
// console.log(student.__proto__ === ProtoStudent.prototype)

// Methods

Reflect.apply(student.greet, {name: 'Anastasia'}, [])
console.log(Reflect.ownKeys(student))

// Reflect.preventExtensions(student) // block changes of this object
console.log(Reflect.isExtensible(student)) // checking is object blocked for changeble
student.age = 25

console.log(student)