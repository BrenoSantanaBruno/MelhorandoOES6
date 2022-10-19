let person = {
    age: 27,
    name: 'Max'
};

let handler = {
    get: function (target, name) {
        return name in target ? target[name] : 'Non-existent';

        // Reflect.set(target, ''   + name, 'Anna');    // Reflect.set(target, name, 'Anna');
    },

    let proxy = new  (person, 'ASADASD');
     set: function(target ,property, value) {

    if (value.length >= 2) {
        Reflect.set(target, property, value);

    }
     }
     };


};  // let proxy = new Proxy(person, handler);
