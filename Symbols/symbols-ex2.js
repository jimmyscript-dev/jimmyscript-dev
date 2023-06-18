const book = {
    name: '1984',
    author: 'George Orwell',
    year: 1949,
    rating: 4.6,
    genre: 'Science Fiction',
    movie: true,
};

book[Symbol.iterator] = function* () {
    const details = Object.entries(book);
    for (const detail of details) {
        yield detail
    }
};

for (const details of book) {
    console.log(details);
};