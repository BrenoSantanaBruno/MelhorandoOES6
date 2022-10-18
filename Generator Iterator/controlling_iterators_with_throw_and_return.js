// let obj  = {
//     [Symbol.iterator] : gen
// }

function *gen(end){
    for (let i = 0; i < end; i++){
        try{
        yield  i;
        } catch (e) {
            console.log(e);
        }
    }
}
let it = gen(2);

console.log(it.next());
console.log(it.throw('An  error ocurred'));
console.log(it.next());
console.log(it.next());


// for (let element of obj) {
//     console.log(element);
// }
//
// let it = gen(10);
