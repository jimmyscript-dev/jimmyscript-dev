const generateAsync = async function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    });

    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000)
    })
}

const generateAsyncObject = generateAsync();

console.log(generateAsync);
console.log(generateAsyncObject);

const generateAsyncExe = async () => {
    for await (const promise of generateAsyncObject) {
        console.log(promise)
    }
    setTimeout(() => {
        console.log('Checking...')
    }, 3000)
    setTimeout(()=> {
        console.log('All done!')
    }, 4000)
};

generateAsyncExe();
