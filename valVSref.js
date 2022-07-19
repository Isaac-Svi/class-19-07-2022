let x = 5;
let obj = { a: 1, b: 2 };

// [{a : 1, b: 2}] <- obj <- arg

const doSomething = (arg) => {
    if (typeof arg === 'object') {
        arg.a++;
    } else if (typeof arg === 'number') {
        arg++;
    }
};

// doSomething(x);
doSomething(obj);

// console.log('x', x);
console.log('obj', obj);
