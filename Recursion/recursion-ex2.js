const flatten = (array) => {
    const emptyFlat = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            const varFlatten = flatten(element);
            for (const innerElement of varFlatten) {
                emptyFlat.push(innerElement);
            }
        } else {
            emptyFlat.push(element)
        }
    }

    return emptyFlat;
}
const result = flatten([1,2,3, [4, 5, [6, [1, 2, 3], 7], [8, [9, [10, 11]]]]]);
console.log(result);