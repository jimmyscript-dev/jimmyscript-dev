const wrapperFunction = () => {
    const prices = [10, 28, 99, 3];

    const logPrices = () => {
        console.log(prices);
    };

    return logPrices;
    //console.log(prices)
}

wrapperFunction();
//console.log(prices); //out of scope.

const logPrices = wrapperFunction();
logPrices();