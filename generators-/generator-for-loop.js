const counter = function* () {
    yield 1;
    yield 2;
    yield 3;

};

const generateCounter = counter();


let counterObj = generateCounter.next();
while (counterObj.done === false) {
    console.log(counterObj.value);
    counterObj = generateCounter.next();
    console.log(counterObj);   
}