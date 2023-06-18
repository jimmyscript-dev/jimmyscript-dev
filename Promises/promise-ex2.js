const startProgram = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000)
});

console.log('Program Start');
console.log(startProgram);
console.log('Program in progress...')

startProgram
    .then(() => {
        console.log('Step 1 Complete...')
        return 'Step 2 Complete!'
    })
    .then((step2) => {
        setTimeout(() => {
            console.log(step2)
        }, 3000)
    });