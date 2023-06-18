let number = 1337;
try {
    let randomNumber = Math.floor(Math.random()* 1000);
    number += randomNumber;
    console.log(number);
    if (number < 2000) {
        throw new Error('You Lose!');
    }
} catch (err) {
    console.error(err);
    console.log(`We lost with the number ${number}`)
}