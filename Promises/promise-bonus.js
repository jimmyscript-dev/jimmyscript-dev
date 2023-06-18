const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 5000)
});

Promise.all([p1, p2])
    .then((sumOfNumbers) => {
        console.log(sumOfNumbers);
        const fNumber = sumOfNumbers[0];
        const sNumber = sumOfNumbers[1];
        const sum = fNumber + sNumber;
        console.log(sum);
    });




//ANOTHER WAY OF DOING IT WITHOUT USING THE Promise.all().
const promise1 = 10;
const promise2 = 20
const promiseAll = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000)
});

promiseAll.then(() => {
    console.log(promise1);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    })
}).then(() => {
    console.log(promise2)

    return new Promise((resolve, reject) => {
        sum = promise1 + promise2;
        resolve(sum);
    })
}).then((total) => {
    console.log(total)
})