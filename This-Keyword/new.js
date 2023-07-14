function Hero(name) {
    this.name = name;
    this.greet = function() {
        console.log(this);
        console.log(`${this.name} says hi!`)
    }
}

const storm = new Hero('Storm');
storm.greet();


const wolverine = new Hero('Wolverine');
wolverine.greet();

console.log('----------------');

console.log(Object.getOwnPropertyNames(storm.__proto__));
console.log(storm.constructor.name)