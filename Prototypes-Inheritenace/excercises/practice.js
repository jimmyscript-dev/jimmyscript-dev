String.prototype.boop = () => {
    console.log('BOOP!')
};

const cat = 'meow';
cat.boop();
console.log(Object.getOwnPropertyNames(cat.__proto__))