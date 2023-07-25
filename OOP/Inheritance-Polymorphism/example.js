//! Parent Class or SUPER Class
class Player {
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`);
    }
}


//! SUB CLASS
class Berserker extends Player {
    constructor(name, hp, mp, items, skills) {
        super(name, hp, mp, items);
        this.skills = skills;

        //super.speak('ASAN NA YUNG SABAW!')
    }

    speak(phrase) {
        console.log(`${this.name} says: Asan na ang sabaw!!!`)
    }
} 

class Crusader extends Player {
    constructor(name, hp, mp, items, skills) {
        super(name, hp, mp, items);
        this.skills = skills;

    }
}

class Guillotine extends Player {
    constructor(name, hp, mp, items, skills) {
        super(name, hp, mp, items);
        this.skills = skills;
    }

    speak(phrase) {
        console.log(`${this.name} says: Patingin nga ng panty.`)
    }
}

const berserker = new Berserker('Berserker', 100, 50, ['Dual Axe'], ['Rampage', 'Whirlwind', 'Rage']);
const crusader = new Crusader('Tank', 100, 90, ['Buckler'], ['Shield Charge', 'Shield Chain', 'Guard']);
const guillotine = new Guillotine('Sin-X', 90, 80, ['Katar'], ['Cross Impact', 'Hide', 'Grimtooth']);
//berserker.speak('Saan na yung Sabaw!!!!');
console.log(berserker);
console.log(berserker instanceof Player);
//console.log(crusader);
//console.log(guillotine);


//! POLYMORPHISM
const players = [berserker, crusader, guillotine];
for (const player of players) player.speak('In the name of the cow!');