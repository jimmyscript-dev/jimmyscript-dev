const counter = function* () {
    console.log('Before 1');
    yield 1;
    console.log('After 1');
    console.log('Before 2');
    yield 2;
    console.log('After 2');
    console.log('Before 3');
    yield 3;
    console.log('After 3');
}

const generateCounter = counter();
console.log(generateCounter.next());
console.log(generateCounter.next());
console.log(generateCounter.next())
console.log(generateCounter.next());