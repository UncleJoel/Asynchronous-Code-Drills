//async
let someNumber;

function number() {
    console.log('cats or mats.');
    return someNumber = 4
};
number();

function multi(num) {
    console.log(num * 4);
};

setTimeout(() => {
    multi(someNumber);
}, 2000);

//Callbacks
 function getWord() {
    console.log('Cats');
    setTimeout(function () {
        console.log('?');
    }, 3000);
    setTimeout(function () {
        console.log('Mats')
    }, 2000);
    setTimeout(function () {
        console.log('or')
    }, 1000);
};

getWord();

function countdown(num, callback) {
    setTimeout(counter, 1000);
     function counter() {
        num = num -1;
        console.log(`The number is ${num}.`)
        if(num>0) {
            countdown(num, done);
        } else {
            callback();
            return;
        }
    }
};

function done() {
    console.log('Done.')
};

countdown(10, done);

//Promises
let hungry = true;

let orderChickenSandwhich = new Promise (function(resolve,reject) {
    if(hungry === true) {
        let snack = {
            sandwhich: 'chicken',
            vegtables: 'lettuce',
            condiments: 'Mayonaise',
        };
        resolve(snack);
    } else {
        let err = new Error ('Not Hungry!')
        reject(err);
    }
}).then(function(result){
    console.log('Fufilled!');
    console.log(result);
}).catch(function (error){
    console.log(error);
});

function orderFood () {
    return orderChickenSandwhich;
};

//chaining promises
let multiNums = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
}).then((result) => {
    console.log(result);
    return resultA = result * 2;
}).then((resultA) => {
    console.log(resultA);
    return resultB = resultA * 4;
}).then((resultB) => {
    console.log(resultB);
    return resultC = resultB * 6;
}).then((resultC) => {
    console.log(resultC);
});

function MultiplyNumbers () {
    return multiNums
};

