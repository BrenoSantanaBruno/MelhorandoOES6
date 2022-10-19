let person = {
age: 27
};
let handler = {
get: function (target, name) {
return name in target ? target[name] : 'Non-existent';

// Reflect.set(target, ''   + name, 'Anna');    // Reflect.set(target, name, 'Anna');
},
         set: function (target, name, value) {
         if (value.length >= 2) {
        Reflect.set(target, name, value);
        }
    }
};
var proxy = new Proxy(person, handler);
proxy.name = 'Breno';
console.log(proxy. name);