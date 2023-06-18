const points = [55, 56, 57, 58, 59, 60];

const sum = points.reduce((total, num) => {
    return total + num
}, 0);

console.log(points);
console.log(sum);