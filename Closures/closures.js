const prices = [6969]
const wrapperFunction = () => {
    //const prices = [100];
    //console.log(prices)

    const logPrices = () => {
        //const prices = [10, 28, 99, 3];
        console.log(prices);
    };

    return logPrices;
    //return wrapperFunction;
    //console.log(prices)
}

//wrapperFunction();
//console.log(prices); //out of scope.

//* new variable 'logPrices'
//const result = wrapperFunction();
//result();
const logPrices = wrapperFunction();
//console.log(logPrices); //[ 10, 28, 99, 3 ]
logPrices();