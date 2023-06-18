const animal = {
    name: 'Koala',
    kingdom: 'Australia',
    cute: true,
    friends: [{
        name: 'Kangaroo',
        kingdom: 'Australia'
    }]
}

const koala = {
    ...animal,
    tail: false
};

console.log(animal);
console.log(koala);

console.log('----------------------');
animal['cute'] = false;

animal.friends[0].cute = false;

console.log(animal);
console.log(koala);