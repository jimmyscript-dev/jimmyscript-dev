const message = 'hello';

try {
    console.log(message);
    throw new Error('Oh no! Tangina mo.')
} catch (error) {
    console.log(error);
    console.log(message)
}

console.log('Program Complete.');

