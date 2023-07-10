const animals = {
    type: 'cat',
    __proto__: Array.prototype
};

console.log(animals);
//console.log(Object.getOwnPropertyNames(animals.__proto__.__proto__))
console.log(animals.__proto__.__proto__.__proto__)