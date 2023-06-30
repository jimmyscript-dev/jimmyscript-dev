const nums = [1 ,2, 3, 4, 5];

const sum = (array, index) => {
    if (index === array.length - 1) {
        return array[array.length - 1]
    }
    return array[index] + sum(array, index + 1)
}
const result = sum(nums, 0);
console.log(result);