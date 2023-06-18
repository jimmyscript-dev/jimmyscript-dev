console.log('Program Started');

const startProgram = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Program in progess...');
        resolve('Program Complete.')
    }, 3000)
});

console.log(startProgram);

startProgram.then((programComplete) => {
    setTimeout(() => {
        console.log(programComplete);
    }, 3000)
});
