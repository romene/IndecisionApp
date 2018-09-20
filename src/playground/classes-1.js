

class Person {
    constructor(name='Pessoa sem nome', surname, age= 0) {
    this.name = name
    this.surname = surname
    this.age = age
    }

    getGreeting() {
        return `Hello! I am ${this.name} ${this.surname}, ${this.age} Old`
    }

    getDescription () {
        return `${this.name} ${this.surname} is ${this.age} year(s) Old.`
    }
}

class Student extends Person {
    constructor(name, surname, age, major) {  // create a constructor with all arguments and includes new ones for student
       super (name, surname, age) // call all arguments you have declared in the extends Class
       this.major = major            // call only this new arguments for students
   }
   hasMajor () {
       return !!this.major
   }
   getDescription() {
       return 'testing'
   }
}

const me = new Student('Rogerio', 'Freitas', 33, 'Sistema para Internet')
console.log(me.getDescription())

const other = new Person ()
console.log(me)
