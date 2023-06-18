const prices = [ [10], [20], [30], [40], [50] ];
console.log(prices);
const copy = [...prices];
console.log(copy);
prices[0].push(15);
prices[3]. push(29);

console.log('---------');

console.log(prices);