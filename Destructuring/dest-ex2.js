const store = new Map();
store.set('cups', 46);
store.set('candles', 121);
store.set('vases', 15);
console.log(store);

for (const [key, value] of store) {
    console.log(`${key} => ${value}`)
}