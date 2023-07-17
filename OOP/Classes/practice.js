class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
}

const tiger = new Animal('Cats', 'Tiger');
const lemur = new Animal('Primate', 'Lemur');

console.log(tiger);
console.log(lemur);