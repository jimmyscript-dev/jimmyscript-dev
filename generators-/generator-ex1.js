const randomNumber = function* () {
    let i = 0;

    while (i <= 10) {
        yield Math.random(i)
        i++
    }

};

const generateRandomNumber = randomNumber();

//console.log(generateRandomNumber.next());

for (const value of generateRandomNumber) {
    console.log(value);
};