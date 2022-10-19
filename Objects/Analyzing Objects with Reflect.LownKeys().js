class Person {
    constructor(name,age){
        // this._name = name;
        this._name = name;
        this.age = age;
    }
    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let mum = {
    _name: "Mum"
};
let person = new Person('Max', 27);
console.log(Reflect.isExtensible(person));
Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person));

// Reflect.set(person, 'name', 'Anna', mum);
Reflect.defineProperty(person, 'hobbies', {
    value: ['Sports', 'Cooking'],
    // writable: true,
    enumerable: true,
    configurable: true
});
// console.log(mum);
// console.log(Reflect.get(person,'name', mum));
// console.log(Reflect.ownKeys(person));
// person.hobbies = ['nothing'];
// // delete person.age;
//
// console.log(person.age);
//
// Reflect.deleteProperty(person, 'age');
// console.log(person.age);

console.log(person.hobbies);