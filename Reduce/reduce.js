const nums = [5, 10, 15, 20, 25];

/*let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum);*/


const sum2 = nums.reduce((result, number) => {
    console.log(result, number) //adds all elements in an into one.

    if (number < 20) {
        return result + number;
    }

    return result;
}, 0) // 0 is the initializer which that would be also 'result'.

console.log(sum2);

/*const animals = [
    'monkey',
    'dog',
    'cat',
    'koala'
]

const concatAnimals = animals.reduce((concat, animal) => {
    console.log(concat, animal)
    return concat + animal + ','
}, "") // "" serves as the container for the strings. while ',' keeps them separated inside the "".

console.log(concatAnimals);



const concatAnimals2 = animals.reduce((concat2, animal2) => {
    concat2 + animal2 + ','
}, "")

console.log(concatAnimals2); // undefined.. there's  nothing to 'return'.
*/