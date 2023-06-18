const orderIceCream = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello there!')
        resolve('Here is your Ice Cream!')
    }, 2000)
});
console.log('Hello?')
console.log(orderIceCream);

orderIceCream.then((resolvedValue) => {
    setTimeout(()=> {
        console.log(resolvedValue);
    }, 4000)
    
    setTimeout(() => {
        console.log('Want some ice cream?')
    }, 1000)

    setTimeout(() => {
        console.log('Yes');
    }, 2000)

    setTimeout(() => {
        console.log('Making your ice cream...')
    }, 3000)
});