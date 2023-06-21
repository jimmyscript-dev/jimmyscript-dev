import fetch from 'node-fetch';
import fs from 'fs/promises'

const response = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((response) => response.json())
    .then((result) => {
        const fetchData = result.sprites.other["official-artwork"].front_default;
        console.log(fetchData);
    })

const getGengar = fetch('https://pokeapi.co/api/v2/pokemon/gengar')
.then((response) => response.json())
.then((pokeDex) => {
    const fetchStatsHP = pokeDex.stats[0].stat.name; //HP
    const baseStatHP = pokeDex.stats[0]["base_stat"]; //60
    const baseStatAtk = pokeDex.stats[1].stat.name; //ATTACK
    const baseAtk = pokeDex.stats[1]["base_stat"]; // 65 for attack
    const baseStatDef = pokeDex.stats[2].stat.name; //DEF
    const baseDef = pokeDex.stats[2]["base_stat"]; //60 for defense
    const baseStatSPAtk = pokeDex.stats[3].stat.name; // special-attack
    const baseSPA = pokeDex.stats[3]["base_stat"]; //130 SP attack
    const baseStatSPDef = pokeDex.stats[4].stat.name; // special-defense
    const baseSPD = pokeDex.stats[4]["base_stat"]; //75
    const baseStatSpeed = pokeDex.stats[5].stat.name; //SPEED
    const baseSpeed = pokeDex.stats[5]["base_stat"]; // 110
    const pokeType = pokeDex.types[0].type.name; // GHOST
    const pokeType2 = pokeDex.types[1].type.name; //Poison
    const pokeAbility = pokeDex.abilities[0].ability.name; // cursed-body

    const pokemonBasicStat = ` 
    GENGAR STATS:
    ${fetchStatsHP}: ${baseStatHP}
    ${baseStatAtk}: ${baseAtk}
    ${baseStatDef}: ${baseDef}
    ${baseStatSPAtk}: ${baseSPA}
    ${baseStatSPDef}: ${baseSPD}
    ${baseStatSpeed}: ${baseSpeed}
    TYPE: ${pokeType} | ${pokeType2}
    Ability: ${pokeAbility}
    `
    console.log(pokemonBasicStat);
})


const gengarSprite = fetch('https://img.pokemondb.net/sprites/scarlet-violet/normal/1x/gengar.png')
    .then((response) => response.arrayBuffer())
    .then((pokeIMG) => {
        fs.writeFile('gengar_Sprite.png', Buffer.from(pokeIMG))
    })