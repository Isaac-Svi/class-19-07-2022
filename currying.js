// const some = a => b => a + b;

const some = function (a) {
    const x = function (b) {
        return a + b;
    };

    return x;
};

// The screenshot is for this function
const add = function (num1) {
    let counter = 0;
    const x = function (num2) {
        counter += 1 + num1 + num2;
        return counter;
    };
    return x;
};
