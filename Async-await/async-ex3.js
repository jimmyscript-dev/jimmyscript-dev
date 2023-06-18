const goGetCandies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({candy: 'Sour keys', quantity: 10})
        }, 2000)
    })
};

const sellCandie = (candy) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(25 * candy.quantity)
        }, 3000)
    })
};

const firstTime = new Date();
const checkout = async () => {
    const checkoutPrice = await goGetCandies();
    console.log(checkoutPrice);
    const result = await sellCandie(checkoutPrice);
    const secondTime = new Date();
    const timeResult = secondTime-firstTime;
    console.log(result, timeResult);

}

checkout();


//vanilla promimse
const candy = goGetCandies();
candy.then((result) => {
    const sellValue = sellCandie(result)
        .then((result) => {
            console.log(result)
        })
});



function goGetCandies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                candy: 'Sour keys',
                quantity: 10
            });
        }, 2000)
    })
}

function sellCandies(candy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(25 * candy.quantity)
        }, 3000)

    })
}


async function checkoutPrice() {
    const calculatePrice = await goGetCandies();
    console.log(calculatePrice);
    const findPrice = await sellCandies(calculatePrice);
    console.log(findPrice);
}

checkoutPrice();