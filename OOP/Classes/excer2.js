class Bookstore {
    constructor(books) {
        this.books = books;
    }

    listBooks() {
        for (const book of this.books) {
            console.log(`${book.name} by ${book.author}`)
        }
    }
};

class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
};

const harryPotter = new Book('Harry Potter', 'J.K. Rowling');
const nineteen84 = new Book('Percy Jackson', 'Rick Riordan');

const bookStore = new Bookstore([harryPotter, nineteen84]);

bookStore.listBooks();