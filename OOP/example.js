class createPlayer {
    constructor(name, hp, mp, item) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.item = item;
    }
}

const newPlayer = new createPlayer('Tess Tickles', 100, 100, ['Broken Sword']);
console.log(newPlayer);