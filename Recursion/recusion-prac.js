const recursiveFizzBuzz = (startNum, endNum) => {
    //!BASE CASE
    if (startNum > endNum) return; //! STOPS HERE!

    //! REGULAR CASE
    if (startNum % 3 === 0 && startNum % 5 === 0) console.log('Fizz Buzz', startNum);
    else if (startNum % 5 === 0) console.log('buzz', startNum);
    else if (startNum % 3 === 0) console.log('fizz', startNum);
    else console.log(startNum);

    //! RECURSIVE CASE
    recursiveFizzBuzz(startNum + 1, endNum);

}
recursiveFizzBuzz(1, 15);