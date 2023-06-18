const cities = ['Vancouver', ' Mexico City', 'Toronto', 'London', 'Berlin'];

//const [, mexicoCity,,,berlin, noneExistent = 'Dubai'] = cities;

////console.log(vancouver);
//console.log(mexicoCity);
//console.log(berlin);
//console.log(noneExistent);

const [vancouver, mexicoCity, ...rest] = cities;
//console.log(mexicoCity);
console.log(rest);



//!Strings
const [letter1, letter2] = 'Hello, Friend';
console.log(letter1, letter2);
//*Sets
const numbers = new Set();
numbers.add(5);
numbers.add(10);
const [five, ten] = numbers;
console.log(five, ten);

//?Maps
const groceries = new Map();
groceries.set('apple', 25);
groceries.set('banana', 100);
const [apple, banana] = groceries;
console.log(apple, banana);

