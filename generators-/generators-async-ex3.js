const timeGenerator = async function* (time) {
    while (true) {
        yield new Promise ((resolve) => {
            setTimeout(() => {
                resolve(time)
            }, time)
        })

        time *= 2;
    }
};

const timeGenObject = timeGenerator(100);

const executeTimeGen = async () => {
    for await (const time of timeGenObject) {
        console.log(time);
    }
};

executeTimeGen();