class Obj1 {
    constructor() {
        this.a = 1;
    }
}

class Obj2 {
    constructor() {
        this.b = 2;
    }
}

var obj1 = new Obj1();
var obj2 = new Obj2();

var obj = Object.assign(obj1, obj2); //the assign transfer the data of first object to second object.

console.log(obj)
console.log(obj2) //console.log(obj2) //continua com os dados recebidos anteriormente
