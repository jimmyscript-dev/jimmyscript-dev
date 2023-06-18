const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello there!')//3
        resolve("Here's your Ice Cream")
        //reject('Sorry no ice cream for you!')
    }, 2000)
})

console.log('Hello?') //1
console.log(myPromise);//2


myPromise.then((rejectValue) => {
    console.log(rejectValue);//4
    console.log(myPromise)//5
    return 'Yo!'//another Promise //6
})
.catch((error) => {
    console.log(error);
    console.log(myPromise);
})
.then((anotherValue) => {
    console.log(anotherValue);
}); // 'yo!' will be stored here since 'yo!' is an another promise.

