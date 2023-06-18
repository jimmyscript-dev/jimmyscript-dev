const characters = {
    name: 'Rick Axley',
    class: 'Axe Wielder',
    qoute: "I'll never let you down.",
    [Symbol('name')]: false,
    [Symbol('age')] : 10,
    __admin__: false,
    [Symbol.iterator] : function* () {
        yield 1;
        yield 2;
        yield 'Hello';
    }
};

for (const value of characters) {
    console.log(value)
};