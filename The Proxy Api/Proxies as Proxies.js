let person = {
    age:27,
    name:'Max'
};
let handler = {

};

let protoHandler = {
    get: function (target, name) {
        return name in target ? target[name] : 'Non-existent';
    }
};

let proxy = new Proxy({}, handler);
let protoProxy = new Proxy(proxy, protoHandler);
Reflect.setPrototypeOf(person, protoProxy);
console.log(person. );