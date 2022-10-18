function waitASecond(seconds){
    return new Promise (function (resolve, reject){
        if (seconds > 2 ) {
            reject(new Error('Seconds must be greater than or equal to 2 seconds'));
        }else {
        setTimeout(function () {
            seconds++;
            resolve(seconds)
        }, 1222 )
            }
    });
}

waitASecond(2)
.then(waitASecond)
.then(function(seconds){
    console.log("The promise is resolved after " + seconds + " seconds");
}).catch(function(error){
    console.log("The promise is rejected after " + error.message + " seconds");
})