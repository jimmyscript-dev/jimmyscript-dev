const prices = [10, 20, 30, 40, 50];

const copy = [];

for (let i = 0; i < prices.length; i++) {
    copy.push(prices[i]);
    console.log(copy);
}

for (const price of prices) {
    copy.push(price);
}

console.log(copy)

const price = [... prices, 60, 70, 80];
console.log(price);