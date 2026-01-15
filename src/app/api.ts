import { Pokemon } from './types.js'

// 1. Create fetchPokemonById function:
//    - Takes: id (number)
//    - Returns: Promise<Pokemon>
//    - Fetches from: https://pokeapi.co/api/v2/pokemon/{id}
//    - Extract only the properties in your Pokemon interface
//    - Add error handling
export async function fetchPokemonById(id:number): Promise<Pokemon>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok){
            throw new Error (`Pokemon number: ${id} not found!`);
        }
    
    const data = await response.json();
    const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        sprites: {
            front_default : data.sprites.front_default
        }
    };
    return pokemon;
}
catch (error){
    console.error('Error fetching Pokemon: ', error);
    throw error;
}
};

// 2. Create searchPokemonByName function:
//    - Takes: name (string)
//    - Returns: Promise<Pokemon>
//    - Fetches from: https://pokeapi.co/api/v2/pokemon/{name}
//    - Convert name to lowercase
//    - Extract only the properties in your Pokemon interface
//    - Add error handling

export async function searchPokemonByName (name:string): Promise<Pokemon>{
   try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        if (!response.ok){
            throw new Error (`Pokemon ${name.toLowerCase()} not found!`);
        }
    
    const data = await response.json();
    const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        sprites:{
            front_default: data.sprites.front_default
        }
    };

    return pokemon;
}
catch (error){
    console.error('Error fetching Pokemon: ', error);
    throw error;
}
}; 


// 3. Export both functions