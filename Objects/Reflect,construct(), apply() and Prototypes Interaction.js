class Person {
    constructor() {
        this.name = "Max";
    }
}

let person = new Person();

Person.prototype.age = 27;

let proto  = {
    age: 30,
    greet() {
        console.log("Hello!");
    }
};

Reflect.setPrototypeOf(person, proto);
Reflect.apply(person.greet, null, []);