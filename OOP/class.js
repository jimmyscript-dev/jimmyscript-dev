class createPlayer {
    constructor(name, hp, mp, item) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.item = item;
    }
}

const newPlayer = new createPlayer('Tess Tickles', 100, 100, ['Broken Sword']);
console.log(Object.getOwnPropertyNames(newPlayer)); // [ 'name', 'hp', 'mp', 'item' ]
console.log(Object.getOwnPropertyNames(newPlayer.__proto__));
console.log(newPlayer);

function AnotherPlayer(name, hp, mp, item) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.item = item;
}

const anotherPlayer = new AnotherPlayer('Jim', 100, 100, ['Broad Sword']);
console.log(Object.getOwnPropertyNames(anotherPlayer)); // [ 'name', 'hp', 'mp', 'item' ]
console.log(Object.getOwnPropertyNames(anotherPlayer.__proto__));
console.log(anotherPlayer);

const jim = new createPlayer('Jim Russ', 300, 200, ['Divine Rapier']);
console.log(jim);