let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Resolved');
    }, 1000);
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Resolved!!!');
    }, 2000);
});

Promise.race([promise1, promise2])
    .then(function(success) {
    console.log(success);
})
    .catch(function(error) {
        console.log(error);
    })
