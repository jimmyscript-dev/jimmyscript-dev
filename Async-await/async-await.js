const makeTimeout = (ms) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('All done')
        }, ms)
    });

    return timeout;
};

console.log('Program Starting')


/*makeTimeout(1000).then((result) => {
    console.log(result)
});*/

const fetchStuff = async () => {
    const result = await makeTimeout(2000);
    console.log(result);
};

fetchStuff();
console.log('Program Finished!');
