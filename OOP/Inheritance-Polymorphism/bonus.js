class FancyArray extends Array {

    //! Making Own version of 'map()' method.
    mapWithLogging(callback) {
        let i = 0
        let result = new FancyArray();
        for (const item of this) {
            const mappedItem = callback(item, i++);
            //i++;
            result.push(mappedItem);
            console.log(`Current: ${item}, AfterCallBack: ${mappedItem}`);
        }
        return result;
    }
}

const array = new FancyArray();
console.log(array)
array.push(1);
array.push(2);
array.push(3);

const mapped = array.mapWithLogging((item, i) => {
    return item + i;
})

console.log(mapped);