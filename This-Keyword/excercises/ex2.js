const book = {
    name: 'Harry Potter',
    author: 'J.K. Rowling',
    characters: {
        mainChars: ['Harry', 'Ron', 'Hermoine'],
        list: function() {
            for (const char of this.mainChars) {
                console.log(char)
            }
        }
    }
};
book.characters.list();
console.log('-------------------')
const newChars = book.characters.list.bind({mainChars: ['Draco', 'Severus', 'Voldemort']});
newChars();