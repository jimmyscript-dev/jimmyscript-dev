class Bookstore {
    constructor(books) {
        this.books = books; //* this is an array.
    }

    listBooks() {
        for (const book of this.books) {
            book.availableBooks();
        }
    }
};

class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }

    availableBooks() {
        console.log(`${this.name} by ${this.author}`)
    }
};

const harryPotter = new Book('Harry Potter', 'J.K. Rowling');
const percyJackson = new Book('Percy Jackson', 'Rick Riordan');

const bookstore = new Bookstore([harryPotter, percyJackson]);
bookstore.listBooks();