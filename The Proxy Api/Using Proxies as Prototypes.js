let person = {
    age: 27,
    name: 'Max'
};
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : 'Non-existent';

    }// Reflect.set(target, ''   + name, 'Anna');    // Reflect.set(target, name, 'Anna');
};
var proxy = new Proxy({}, handler);
Reflect.setPrototypeOf(person, proxy);
console.log(person.hobbies);