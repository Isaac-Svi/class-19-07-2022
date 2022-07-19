const obj = {
    bob: 'hi bob',
    bob2: 2,
    bob3: false,
    bob4: (x) => console.log(x),
};

const arr = [1, 2, 3, 4];

obj.bob4('asdfadsf');

let player_x_score = 0;
// let player_x_score_show =
//     document.getElementById('scoreX');

let score = 0;

const player_x = {
    attribute: 'asdf',
    score,
    // score_show: document.getElementById('scoreX'),
    'is&&winner': false,
};

const getAttributeOfPlayerX = (attribute) => {
    return player_x[attribute];
};

for (const bob in player_x) {
    console.log(bob, player_x[bob]);
}

console.log('key' in player_x);
console.log(player_x.hasOwnProperty('key'));
