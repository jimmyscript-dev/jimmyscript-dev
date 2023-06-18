const baboon = Symbol('Monkey');
const gorilla = Symbol('Monkey');

console.log(typeof baboon);
console.log(typeof gorilla);

console.log(baboon.description);
console.log(gorilla.description);

console.log(baboon === gorilla);