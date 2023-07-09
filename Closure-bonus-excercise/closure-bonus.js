import fetch from 'node-fetch';


const pokemonDownloader = () => {
    let pokemonCache = {};
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const download = async (string) => {
        if (pokemonCache[string]) { //if it is in the cache and return the cache.
            console.log(`${string} was in cache`)
            return pokemonCache[string];
        } else {
            //not in the cache so fetch it.
            const fetchPoke = await fetch(url + string);
            const data = await fetchPoke.json();
            console.log(`${string} fetched from API:`);
            //store the pokemon in the cache
            pokemonCache[string] = data;
            return data;
        }
    }
 
    return download;
}

const result = pokemonDownloader();
const pikachu = await result('pikachu');
result('mew');
result('pikachu')
