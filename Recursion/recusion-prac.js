const recursiveFizzBuzz = (startNum, endNum) => {
    //!BASE CASE
    if (startNum > endNum) return; //! STOPS HERE!

    //! REGULAR CASE
    if (startNum % 3 === 0 && startNum % 5 === 0) {
        console.log('Fizz Buzz', startNum);
    } else if (startNum % 5 === 0) {
        console.log('Fizz', startNum);
    } else if (startNum % 3 === 0) {
        console.log('Buzz', startNum)
    } else {
        console.log(startNum);
    }
    recursiveFizzBuzz(startNum + 1, endNum);
}
const result = recursiveFizzBuzz(1, 15);
console.log(result)