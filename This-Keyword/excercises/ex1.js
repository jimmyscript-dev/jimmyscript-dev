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
}
/*book.characters.list(); //['Harry', 'Ron', 'Hermoine']
console.log('-----------------')
book.characters.list = book.characters.list.bind({mainChars: ['Draco', 'Severus', 'Voldemort']});
book.characters.list(); //['Draco', 'Severus', 'Voldemort']
console.log('-----------------') */

const book2 = {
    characters: {
        mainChars: ['Luna', 'Hagrid', 'Beatrix']
    }
};

book.characters.list.call({mainChars: ['Luna', 'Hagrid', 'Beatrix']}) // this will be a temporary change. since we use 'call()' method.

book.characters.list();