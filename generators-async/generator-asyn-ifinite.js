const generatAsync = async function* () {
    let i = 0;
    while (true) {
        if (i === 5) {
            //! stops the infinite looping here!
            yield 'Number 5 here!'
            return;
        } else {
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(i);
                }, 1000)
            })

            i++;
        }
    }

};
const generatAsyncObject = generatAsync();
console.log(generatAsync);
console.log(generatAsyncObject);

const generatAsyncExe = async () => {
    for await (const promise of generatAsyncObject) {
        console.log(promise);
    }
};

generatAsyncExe();