const outer = (x) => {
    const inner = () => {
        console.log('you put in', x);
    };

    return inner;
};

const innerFunc = outer(5);

innerFunc();
