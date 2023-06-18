const counter = function* () {
    yield 1;
    yield 2;
    return; //!stops the yield.
    yield 3;

};

const generateCounter = counter();

for (const value of generateCounter) {
    console.log(value);
    console.log(generateCounter.next())
    console.log(generateCounter.next())
}