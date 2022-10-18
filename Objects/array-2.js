// let array1 = new Array(5);
// let array2 = Array.of(5);
// console.log(array1);
// console.log(array2);

let array = [10,12,16];
array.fill(100, 1, 2);
console.log(array.find(val =>val  >= 12)); 
console.log(array);


let newArray = Array.from(array, val => val * 2);

console.log(newArray);
