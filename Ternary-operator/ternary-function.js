//* function with ternary operator
const happyCheck = (happy) => {
    return (happy === true) ?
        'Yay' :
        'Nope'
};

console.log(happyCheck(true));
console.log(happyCheck(false));

//!fucntions with regular condition statements
const happyCheck2 = (happy) => {
    if (happy === true) {
        return 'Yay';
    } else {
        return 'Nope';
    }
};
console.log(happyCheck2(true));
console.log(happyCheck2(false));

//? Ternary operators with arrow function
const happyCheck3 = happy => happy === true ? 'Yay' : 'Nope';
console.log(happyCheck3(true));
console.log(happyCheck3(false));