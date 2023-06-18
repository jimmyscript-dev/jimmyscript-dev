const book = {
    name: '1984',
    author: 'George Orwell',
    year: 1949,
    rating: 4.6,
    genre: 'Science Fiction',
    movie: true,
};

book[Symbol.asyncIterator] = async function* () {
    const bookDetails = Object.entries(book);
    for (const entry of bookDetails) {
        yield new Promise ((resolve) => {
            setTimeout(() => {
                resolve(entry)
            }, 1000)
        })
    }
};

const generateInfo = async () => {
    for await (const details of book) {
        console.log(details);
    }
};

generateInfo();