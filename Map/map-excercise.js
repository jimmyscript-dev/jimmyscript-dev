/*const practice = [25, 26, 27, 28, 29, 30];


const squareArray = practice.map((number) => {
  return number ** 2;
})
console.log(practice);
console.log(squareArray);


//practice 1

const bools = [true, true, false, true, false, false];


const booleans = bools.map((choices) => {
  if (choices) {
    return Math.random();
  } else {
    return 0;
  }
})
console.log(bools);
console.log(booleans);


//practice 2 
const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const taxedPrices = prices.map((price) => {
  if (price > 10) {
    return price * 1.2;
  } else {
    return price = price;
  }
})
console.log(prices);
console.log(taxedPrices);


//practice 3

const items = ['light', 'banana', 'phone', 'book', 'mouse'];

const plurals = items.map((item) => {
  if (item === 'mouse') {
    return 'mice';
  }
  return item + 's';
})

console.log(items);
console.log(plurals);

*/

//bonus practice 
//2D Array
const row = [10, 20, 30, 40, 50];

const matrix = row.map((number) => {
  const array = []
  array.push(number)
  return array
})

console.log(row);
console.log(matrix);