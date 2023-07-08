const createVendingMachine = () => {
    const stock = ['Cola', 'Chips', 'Chocolate', 'Juice', 'Nuts'];
    let coins = 0;
    const randomStuff = Math.floor(Math.random() * stock.length);
    const randomItem = stock[randomStuff];
    const add25 = () => {
        coins += 25;
        if (coins === 100) {
            coins = 0;
            return `You got ${randomItem}!`;
            
        } else if (coins < 100) {
            const currentCoins = 100 - coins;
            return `Insert ${currentCoins} more coins.`;
        }
    }
    return add25;
}

const vendingMachine = createVendingMachine();
console.log(vendingMachine());
console.log(vendingMachine());
console.log(vendingMachine());
console.log(vendingMachine());
console.log(vendingMachine());