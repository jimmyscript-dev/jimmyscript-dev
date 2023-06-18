const fetchPokemon = (ms) => {
    const pokeDex = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve({data: {name: 'Pikachu', power: 20}})

            reject(new Error('A wild pokemon Appeared!'))
        }, ms)
    })

    return pokeDex;
}

const usePokeDex = async () => {
    try {
        const pokeInfo = await fetchPokemon(2000);
        console.log(pokeInfo);
    } catch(error) {
        console.error(error);
        
    }
    console.log('Program Complete');
}
console.log('Program starting.')
usePokeDex();