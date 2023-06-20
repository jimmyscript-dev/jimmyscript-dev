import fetch from 'node-fetch';

const response = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((response) => response.json())
    .then((result) => {
        const fetchData = result.sprites.other["official-artwork"]
        console.log(fetchData);
    })