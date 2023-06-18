const characters = {
    name: 'Rick Axley',
    class: 'Axe Wielder',
    qoute: "I'll never let you down.",
    [Symbol('name')]: false,
    [Symbol('age')] : 10,
    [4 + 5] : 'age'
};

for (const character of Object.keys(characters)) {
    console.log(character);
};

console.log(Object.getOwnPropertySymbols(characters));