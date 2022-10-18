function waitASecond(seconds) {
    return new Promise(function(resolve, reject){
        if (seconds > 2 ){
            reject('Rejected!');
        }
        setTimeout(function() {
            seconds ++;
            resolve(seconds);
    },  1000);
    });
}

waitASecond(0)
    .then(waitASecond)
   .then(function(seconds) {
       console.log("Second is " + seconds);
   })

function waitASecond(seconds) {
    return new Promise(function(resolve, reject){
        if (seconds > 2 ){
            reject('Rejected!');
        }
        setTimeout(function() {
            seconds ++;
            resolve(seconds);
    },  1000);
}, function(err){   reject(err); });}

const flamengo = ['1','2','3'];
const vai  = () => flamengo.map(function(n){ return
    console.log(n[1]);
    // return n + 1;
})


botafogo = new Array('1','2','3');
// botafogo.map( function (n) => echo (n);  )

var fogobota = (fn) => {
    botafogo.filter( (fn) => console.log(fn))    //console.log(n);
}
// fogobota(['1']);

vai('0');