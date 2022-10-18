class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(prefix){
        console.log(prefix +  'Hello, I Am ' + this.name);
    }
}

let person = Reflect.construct(Person, ['MAX', 27]);

Reflect.apply(person.greet, person, [])
Reflect.apply(person.greet, {name: "Breno"}, [])
Reflect.apply(person.greet, {name: "Breno"}, ['...'])

// console.log(person.name);
// console.log(person.age);
// console.log(this.greet(person));