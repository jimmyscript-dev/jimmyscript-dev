const fetchFast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fast Done!')
        }, 2000)
    })
}


const fetchSlow = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Slow Done...')
        }, 6000)
    })
}
const firstTime = new Date();
const fetchSpeed = async () => {
    const result1 = fetchFast();
    //console.log(result1)
    const result2 = fetchSlow();
    //console.log(result2)
    const result3 = await Promise.all([result1, result2])
    console.log(result3);
    
    const seconDate = new Date();
    const finalDate = seconDate - firstTime;
    console.log('Program finished!', finalDate);
}

console.log('Program Starting...')
fetchSpeed();