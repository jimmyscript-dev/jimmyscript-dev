class Player {
    constructor(name) {
        this.name = name;
    }
};

class Spaceship {
    lives = 3;
    fireDelay = 1500;
    xPosistion = 200;
    yPosition = 50;
}

const spaceship = new Spaceship();
console.log(spaceship);

const player = new Player('Jim Russ');
console.log(player);


class Alien {
    lives = 1;
    fireDelay = 3000;

    constructor(xPosistion, yPosition) {
        this.xPosistion = xPosistion;
        this.yPosition = yPosition;
    }

    
}

const alien = new Alien();
console.log(alien);