try {
    const message = 'hello there'
    console.log(message);
    throw new Error('boom!')
} catch (error) {
    console.error(error) // Boom!
    console.error("I got you bro!")
}

console.log('hello?');