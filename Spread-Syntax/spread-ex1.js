const views = [ [5, 10, 20], [10, 20, 30] ];

const viewsCopy = [... views];
console.log(views);
console.log(viewsCopy);
console.log('------');

views[1].push(40);
views[0].pop();
console.log(views);
console.log('--------');

views.push([100, 200]);
console.log(views);
console.log(viewsCopy);