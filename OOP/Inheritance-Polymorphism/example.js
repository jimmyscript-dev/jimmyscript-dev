class Player {
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`)
    }
}

class Berserker extends Player {
    constructor(name, hp, mp, items, skills) {
        super(name, hp, mp, items);
        this.skills = skills;
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
}

const berserker = new Berserker('Zork', 100, 50, ['Dual Axe'], ['Rampage', 'Whirlwind', 'Rage']);
const crusader = new Crusader('Tank', 100, 90, ['Buckler'], ['Shield Charge', 'Shield Chain', 'Guard']);
const guillotine = new Guillotine('Sin-X', 90, 80, ['Katar'], ['Cross Impact', 'Hide', 'Grimtooth']);
berserker.speak('Saan na yung Sabaw!!!!');
//console.log(berserker);
//console.log(crusader);
//console.log(guillotine);