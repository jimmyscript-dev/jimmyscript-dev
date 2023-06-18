const countTo10 = function* () {
    let i = 0;

    while(i <= 10) {
        yield i;
        i++
    }
}

const generateCountTo10 = countTo10();

for (const value of generateCountTo10) {
    console.log(value);
}