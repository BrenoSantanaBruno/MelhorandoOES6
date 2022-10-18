class Person {
    constructor() {
        this.name = 'Breno';

    }

}

let person = new Person();
Person.prototype.age = 27;

let proto = {
    age: 28
};

Reflect.setPrototypeOf(person, proto);

console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person) == Person.prototype); // Breno
console.log(person.__proto__ == Person.prototype); // Breno
console.log(typeof person)
