const store = {
    name: null,
    stock: [
        {name: 'candy', quantity: 100},
        {name: 'fruit', quantity: 7},
        {name: 'toys', quantity: 23}
    ]
};


let myStore = {};
myStore = {...store};
myStore.name = 'My Wonderful Store';
myStore.stock[1].quantity = 300;
console.log(myStore);
console.log(myStore.stock)
console.log(Object.getOwnPropertyNames(myStore)); // [name, stock]


let yourStore = {};
yourStore = {... store}
yourStore.name = 'Not Your Wonderful Store';
console.log(yourStore.name);
console.log(yourStore.stock)
console.log(Object.getOwnPropertyNames(yourStore)); // [name, stock]