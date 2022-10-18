class Person {
    constructor(name){
        this.name = name;
    }
}

// let person = new Person; Reflect.construct(Person, ['MAX']);
// console.log(person instanceof Person);

function TopObj(){
    this.age = 27;
}

let person = Reflect.construct(Person, ['MAX'], TopObj);

console.log(person.__proto__ == TopObj.prototype);
