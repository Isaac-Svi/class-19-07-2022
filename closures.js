function outside(x) {
    function inside(y) {
        const z = 6;
        return x + y + z;
    }
    return inside;
}

const inside1 = outside(5);
inside1(10);

const inside2 = outside(15);
inside2(20);
