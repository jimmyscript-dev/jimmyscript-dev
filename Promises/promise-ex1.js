const startProgram = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)

    setTimeout(() => {
        reject()
    }, 2000)
});

console.log('Program Started');
console.log(startProgram);
console.log('Program in progress...');

startProgram
    .then(() => {
        console.log('Program Complete');
    })
    .catch(() => {
        console.log('Program Failed!');
    });