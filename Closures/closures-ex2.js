const createVendingMachine = () => {
    const stock = ['Cola', 'Chips', 'Chocolate', 'Juice', 'Nuts'];
    let coins = 0;
    const randomItem = Math.floor(Math.random() * stock.length);
    const randomItemName = stock[randomItem]
    
    const add25 = () => {
        coins += 25;
        if (coins === 100) {
            return `You got ${randomItemName}!`;
        } else if (coins < 100) {
            const currentCoin = 100 - coins;
            return `Insert ${currentCoin} more coins.`;
        }
        //return coins;
    }
    return add25;
}

const vendingMachine = createVendingMachine();
console.log(vendingMachine());
console.log(vendingMachine());
console.log(vendingMachine());
console.log(vendingMachine());