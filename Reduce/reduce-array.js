const nums = [5, 10, 15, 20, 25];


const reduced = nums.reduce((result, num) => {
    console.log(result, num)
    result.push(num)
    return result
}, [])

console.log(reduced)



const filteredNums = nums.reduce((result, num) => {
    if (num > 5 && num < 20) {
        result.push(num);
        return result;
    }

    return result;
}, [])

console.log(filteredNums); // [10, 15]