const superhero = {
    name: 'Bruce Wayne',
    alias: 'Batman',
    universe: 'DC',
    happy: false,
    enemies: ['Joker', 'Catwoman', 'Bane'],
    bestMoive: {
        title: 'The Dark Knight Rises',
        rating: 95
    }
};
console.log(superhero);
console.log('------------');

const superheroCopy = {
    ...superhero,
    enemies: [...superhero.enemies, 'Poison Ivy'],
    bestMoive: {
        ...superhero.bestMoive, year: 2008
    }
};

console.log(superheroCopy);