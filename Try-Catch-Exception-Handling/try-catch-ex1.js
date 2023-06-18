for (let i = 1; i <= 10; i++) {
    console.log(i)
    try {
        if (i === 5) {
            throw new Error('Boom tanga!')
            console.error(i)
        }
    } catch (err) {
        console.error(err, i)
    }
}