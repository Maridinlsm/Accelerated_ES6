// Promises, useful helper to work on a sychronous task
// Promise parameter/argument (resolve, reject)
export const createPromise = () => {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // resolve('Done!');
            reject('Failed!!')
        }, 1000)
    })
    promise.then(function(value){ // .then() will only handle
        console.log(value)
    }, function(error) { // create function to display the error
        console.log(error)
    })
}

export const chaningPromises = () => {
    function waitASecond(seconds) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                seconds++;
                resolve(seconds);
            }, 1000)
        })
    }
    waitASecond(0)
        .then(waitASecond)
        .then(function(seconds){
            console.log(seconds);
        })
}

// task
export const catchingErrors = () => {
    function waitASecond(seconds) {
        return new Promise(function(resolve, reject) {
            if (seconds > 2 ){
                reject('Rejected!')
            } else {
                setTimeout(function() {
                    seconds++;
                    resolve(seconds);
                }, 1000)
            }
        })
    }
    waitASecond(1)
        .then(waitASecond)
        .then(function(seconds){
            console.log(seconds);   // done when resolve
        })
        .catch(function(error) {
            console.log(error);     // done when reject
        });
}

// all wait the last promise to finished
// race wait the first promise to finish
export const allAndRace = () => {
    let promise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Resolved!');
        }, 1000);
    });
    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('Rejected!');
        }, 2000);
    });

    Promise.race([promise1, promise2])
        .then(function(success){
            console.log(success);
        })
        .catch(function(error) {
            console.log(error);
        })
}