class Player {
    constructor(name) {
        this.name = name;
    }
};

class Spaceship extends Player {
    lives = 3;
    fireDelay = 500;
    positionX = 300;
    positionY = 500;
    constructor(name, score) {
        super(name, score);
    }

    shoot() {
        console.log(`${this.name} shoots!`)
    }

    moveLeft() {
        console.log(`${this.name} moves to left.`)
    }

    moveRight() {
        console.log(`${this.name} moves to right.`)
    }
}


class Alien {
    lives = 1;
    positionX = 300;
    positionY = 200;
    constructor(color = 'Brown') {
        this.color = color;
    }

    shoot() {
        console.log(`Pew Pew!`)
    }

    moveLeft() {
        console.log('Alien moves left.')
    }

    moveRight() {
        console.log('Alien moves right.')
    }

    displayAlien() {
        console.log(`A ${this.color} Alien`)
    }
}

class Level2Alien extends Alien {
    lives = 2;
    constructor(color = 'Grey') {
        super(color);
    }
}

class LevelAlien extends Alien {
    constructor(color = 'Bright Red') {

    }
}

const spaceship = new Spaceship('Jim');
console.log(spaceship);
spaceship.moveLeft();
spaceship.shoot();
spaceship.moveRight();

console.log('-----------------');

const alien = new Alien('Brown');
console.log(alien);
alien.displayAlien();
alien.shoot();

const alien2 = new Level2Alien('Red');
console.log(alien2);
alien2.shoot();
alien2.moveLeft();
alien2.displayAlien();