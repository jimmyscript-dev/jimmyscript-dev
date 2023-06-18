const randomNumberFromRange = function* () {
    for (let i = 0; i < 5; i++) {
        yield Math.floor(Math.random() * (10 -1) + 1)
    }
}

const groceryList = function* () {
    const groceries = ['Avocado', 'Cookie', 'Milk', 'Soup', 'Soda'];
    for (let i = 0; i < 5, groceries.length; i++) {
        const randomIndex = Math.floor(Math.random() * groceries.length);
        const removedItem = groceries.splice(randomIndex, 1)[0]
        yield removedItem;
    }
}

const generateRandomNumber = randomNumberFromRange()
const groceryGenerator = groceryList();

for (let i = 0; i < 5; i++) {
    const randomNumber = generateRandomNumber.next().value;
    const grocery = groceryGenerator.next().value;
    console.log(`${randomNumber} ${grocery}`);
};