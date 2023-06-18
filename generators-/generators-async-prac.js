const asyncGenerator = async function* () {
    while (true) {
        yield new Promise((resovle) => {
            setTimeout(() => {
                resovle(Math.floor(Math.random() * (9 - 0) + 0))
            }, 1000)
        })
    }
};


const asyncGeneratorObject = asyncGenerator();

const executeAsyncGen = async () => {
    for await (const random of asyncGeneratorObject) {
        console.log(random);
    }
};

executeAsyncGen();