const over9000 = (number) => {
    if(number > 9000) {
        return "It's over 9000!"
    } else {
        return 'Talking a Nappa'
    }
}

console.log(over9000(10000));
console.log(over9000(1000));


const number9000 = (number) => number > 9000 ? "It's over 9000" : 'Talking Nappa';

console.log(number9000(20000));