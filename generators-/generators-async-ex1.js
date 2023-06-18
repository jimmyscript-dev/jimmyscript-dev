const asyncGenerator = async function* () {
    while (true) {
        const chance50 = Math.random();
        if (chance50 < 0.5) {
            yield new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Fast!')
                }, 500)
            })
        } else {
            yield new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Slow...')
                }, 3000)
            })
        }
    }
};

const asyncGeneratorObject = asyncGenerator();

const executeAsyncGen = async () => {
    for await (const chances of asyncGeneratorObject) {
        console.log(chances);
    }
};

executeAsyncGen();