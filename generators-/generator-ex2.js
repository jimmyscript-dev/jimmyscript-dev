const randomAmountFromRange = function* (amount, min, max) {
    for (let i = 0; i < amount; i++) {
        yield Math.floor(Math.random() * max - min) + min;
    }
}

const randomObject = randomAmountFromRange(3, 10, 20);
const randomObject2 = randomAmountFromRange(5, 100, 200);
const randomObject3 = randomAmountFromRange(10, 1000, 2000);

for (const value of randomObject) {
    console.log(value);
}
console.log('--------------');
for (const value of randomObject2) {
    console.log(value);
}
console.log('--------------')
for (const value of randomObject3) {
    console.log(value);
}