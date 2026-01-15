// 1. Create an interface for the API response from:
//    https://pokeapi.co/api/v2/pokemon/pikachu
//    You only need these properties:
//    - id (number)
//    - name (string)
//    - height (number)
//    - weight (number)
interface PokemonAPI {
    id: number;
    name: string;
    height: number;
    weight: number;
};

// 2. Write an async function called 'fetchPokemon' that:
//    - Takes a pokemon name (string)
//    - Returns a Promise with your interface type
//    - Uses fetch() to get data from the API
//    - Handle errors with try/catch
async function fetchPokemon(name:string): Promise<PokemonAPI>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok){
            throw new Error (`Pokemon ${name} not found!`);
        }
    
    const data = await response.json();
    const pokemon: PokemonAPI = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight
    };

    return pokemon;
}
catch (error){
    console.error('Error fetching Pokemon: ', error);
    throw error;
}
}

fetchPokemon('pikachu').then(pokemon => {
  console.log(pokemon);
}).catch(error => {
    console.log('Caught error: ', error.message);
});





// 3. Call the function and log the result