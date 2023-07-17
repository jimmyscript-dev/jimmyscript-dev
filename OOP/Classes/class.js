class createPlayer {
    constructor(name, hp, mp, item) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.item = item;
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`)
    }

    createConfrim() {
        console.log('Character Created.')
    }
};

const jim = new createPlayer('Jim Russ', 300, 200, ['Divine Rapier']);
console.log(Object.getOwnPropertyNames(jim))
console.log(Object.getOwnPropertyNames(jim.__proto__));
console.log(jim);
jim.createConfrim();



const ivo = new createPlayer('Ivo', 200, 100, ['Daedalus']);
console.log(Object.getOwnPropertyNames(ivo));
console.log(Object.getOwnPropertyNames(ivo.__proto__));
console.log(ivo);
ivo.speak('POTANG INA!')
ivo.createConfrim();