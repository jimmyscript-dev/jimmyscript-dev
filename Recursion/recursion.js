/*const counter = (number) => {
    while (number >= 0) {
        console.log(number)
        number--
    }
}
counter(100)*/

const counter = (number) => {
    console.log(number);
    if (number === 0) return
    counter(number - 1)
    
}

counter(10);