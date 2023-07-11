const store = {
    name: null,
    stock: [
        {name: 'candy', quantity: 100},
        {name: 'fruit', quantity: 7},
        {name: 'toys', quantity: 23}
    ]
};


let myStore = {};
//myStore = {...store}; //! myStore now Inherits the properties of "store."
myStore.name = 'My Wonderful Store';
myStore.__proto__ = store;
myStore.stock[1].quantity = 300;

//console.log(Object.getOwnPropertyNames(myStore)); // [name, stock]


let yourStore = {};
//yourStore = {... store} //! yourStore now Inherits the properties of "store."
yourStore.__proto__ = store;
yourStore.name = 'Not Your Wonderful Store';

console.log(myStore.name, myStore.stock);
console.log(yourStore.name, yourStore.stock);
//console.log(Object.getOwnPropertyNames(yourStore)); // [name, stock]