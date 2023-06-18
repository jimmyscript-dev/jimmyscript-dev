const characters = ['Han Solo', 'Spock', 'Darth Vader', 'Yoda', 'Neo', 'Sarah Connor'];

const filterCharacter = characters.filter((character) => {
    if (character.includes(' ')) {
        return character;
    }

    return false;
});

console.log(filterCharacter);
console.log('------------------')
const filterCharacter2 = characters.filter((character) => character.includes(' ') ? character : false);
console.log(filterCharacter2);