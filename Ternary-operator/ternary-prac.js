const hungry = true;

hungry === true ? console.log('Have a cookie') : console.log('No cookies for you!');


const hungry2 = false;

if (hungry2 === true) {
    console.log('Have a cookie');
} else {
    console.log('No cookies for you')
};


const checkHungry = (hungry) => hungry === true ? 'Have a cookie' : 'No cookies for you!'

console.log(checkHungry(true));
console.log(checkHungry(false));