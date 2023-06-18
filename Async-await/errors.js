const makeTimeout = (ms) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            //esolve('All done')
            reject('There was an error')
        }, ms)
    });

    return timeout;
};

const causeError = async () => {
    //try and catch only works if it gets rejected
    try {
        const result = await makeTimeout(2000);
        console.log(result);
    } catch(error) {
        console.log(error);
        console.log('Program finished.')
    }
}

console.log('Program starts...')
causeError();