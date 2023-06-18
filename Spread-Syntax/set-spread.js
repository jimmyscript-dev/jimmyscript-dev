const ages = new Set();

ages.add(5);
ages.add(10);
ages.add(15);

const allAges = [... ages, 20];
console.log(allAges);

const mySet = new Set();

mySet.add('Batman')
mySet.add('Robin')
mySet.add('Spiderman')
mySet.add('Batman')

const allSet = [... mySet];

console.log(allSet);

