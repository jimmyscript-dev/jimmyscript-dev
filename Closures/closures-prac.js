const createCounter = () => {
    let counter = 0;
    const incrementCounter = () => {
        counter++
        console.log(counter)
    }

    return incrementCounter;
}

const counter = createCounter();
counter();
counter();
counter();
counter();
counter();