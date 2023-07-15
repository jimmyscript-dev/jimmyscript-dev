function Person(name, age, favoriteFood) {
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;   
}

const avery = Person('Avery', 30, 'DarkChocolate');
const jackie = new Person('Jackie', 35, 'Sourdough Bread');

console.log(avery);
console.log(jackie);
console.log(Object.getOwnPropertyNames(jackie.__proto__.__proto__));
console.log(jackie.constructor.name);