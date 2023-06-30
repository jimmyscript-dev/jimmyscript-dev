const number = [1, 2, 3, 4, 5];

const sum = (nameOfArray, index) => {
    if (index === nameOfArray.length -1 ) {
        return nameOfArray[index]
    }

    return nameOfArray[index] + sum(nameOfArray, index + 1)
};

const result = sum(number, 0);
console.log(result)