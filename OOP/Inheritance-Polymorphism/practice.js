class Vehicle {
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }
}

class Spaceship extends Vehicle {
    constructor(name, maxSpeed, numRocketEngines) {
        super(name, maxSpeed)
        this.numRocketEngines = numRocketEngines;
    }
}


const spaceship = new Spaceship('Falcon', 1000, 2);
console.log(spaceship);
console.log(spaceship.getMaxSpeed());
console.log(spaceship.numRocketEngines);