const counter = function* () {
    //yield 1;
    //yield* [2, 3, 4]
    //yield 5;
    yield* [1, 2, 3, 4, 5]
}

const counterGenerator = counter();

for (const value of counterGenerator) {
    console.log(value);
};