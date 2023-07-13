function Person(name) {
    this.name = name;
}

const celo = Person('Cleo');
const taylor = new Person('Taylor');
console.log(Object.getOwnPropertyNames(taylor.__proto__.constructor))
console.log(taylor);
console.log(taylor.__proto__.constructor.name)