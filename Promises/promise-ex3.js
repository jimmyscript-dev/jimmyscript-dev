console.log('Program Start');


const startProgram = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dataList = {
            data: 'Hello friend',
            error: null
        }
        resolve(dataList)
    }, 5000)
});

console.log(startProgram);
console.log('Program in progess...');

startProgram
    .then((newChain) => {
        console.log(newChain);


        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('First Chain Fullfilled.')
            }, 2000)
        })
    })
    .then((firstChain) => {
        console.log(firstChain)
    })

//SECOND CHAIN
//startProgram can be used again...
startProgram
    .then((newChain) => {
        console.log(newChain);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Second Chain Fullfilled.')
            }, 10000)
        })
    })
    .then((secondChain) => {

        console.log(secondChain);
    });
    

    