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
console.log(spaceship); // Spaceship { name: 'Falcon', maxSpeed: 1000, numRocketEngines: 2 }
console.log(spaceship.getMaxSpeed()); // 1000
console.log(spaceship.numRocketEngines); //2