const countDown = (number) => {
    if (number > 0) {
        console.log(number);
        countDown(number - 1);
    }
};

countDown(100);
