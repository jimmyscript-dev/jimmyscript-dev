Object.prototype.speak = () => {
    console.log('hi');
}

Object.prototype.greeting = () => {
    console.log('Hello greetings from Mars!')
}

const animal = {
    type: 'monkey'
};

const animal2 = {
    type: 'cat'
}

animal.speak(); //'Hi'
animal2.speak(); //'Hi'

animal.greeting(); // 'Hello greetings from Mars!'

console.log(Object.getOwnPropertyNames(Object));
console.log(Object.getOwnPropertyNames(animal.__proto__));
console.log(Object.getOwnPropertyNames(animal)); // [type]