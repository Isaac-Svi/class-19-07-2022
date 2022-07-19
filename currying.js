// const add = a => b => a + b;

const add = function (a) {
    const x = function (b) {
        return a + b;
    };

    return x;
};
