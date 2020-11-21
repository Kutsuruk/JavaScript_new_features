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
