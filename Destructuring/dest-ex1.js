const snacks = {
    chips: { name: 'Pringles', salty: true},
    candy: {name: 'Twizzles', salty: false},
    chocolate: {name: 'Mars', salty: false}
};

console.log(snacks);
const {candy, fruit = {name: 'banana', salty: false}} = snacks;
console.log(candy);
console.log(fruit);
console.log(snacks);