const pet = {
    name: 'Nemo',
    type: 'fish',
    age: 2,
};

const pet2 = {
    name: 'Robert',
    type: 'racoon',
    age: 3
}

Object.prototype.sayHello = function() {
    console.log(`${this.name} is a ${this.type} and is ${this.age} years old. ${this.name} says hi!`)
    console.log(this)
}

const pet3 = {
    name: 'Patrick',
    type: 'starfish',
    age: 'Immortal'
}

pet.sayHello();
pet2.sayHello();
pet3.sayHello();