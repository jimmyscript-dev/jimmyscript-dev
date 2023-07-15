function Person(name, age, favoriteFood) {
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
}

Person.prototype.greet = function() {
    console.log(`${this.name} says hello!`)
}


function SuperHero(name, age, favoriteFood, overpowered) {
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
    this.overpowered = overpowered;
    //SuperHero.__proto__ = Person.prototype;
    //return SuperHero;
}

SuperHero.prototype.__proto__ = Person.prototype; // Inherits now the "Person" Prototype. which now we can use this as batman.gree();

const taylor = new Person('Taylor', 26, 'Crabs');
const batman = new SuperHero('Bruce', 25, 'Steak');
taylor.greet()
batman.greet();

console.log(Object.getOwnPropertyNames(taylor));
console.log(taylor.constructor.name); //Object
//console.log(taylor.__proto__.__proto__.__proto__.constructor.name);//null
//console.log(Object.getOwnPropertyNames(batman.__proto__.__proto__.__proto__));// null
console.log(Object.getOwnPropertyNames(batman))
console.log(batman.constructor.name) // Person