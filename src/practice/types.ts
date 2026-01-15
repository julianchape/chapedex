// Define a simple Pokemon interface with just 3 properties:
// - name (string)
// - type (string) 
// - level (number)
interface Pokemon {
name: string;
type: string;
level: number;

}

// Then create a variable called 'myPokemon' using that interface
let myPokemon = {
    name: "Pikachu",
    type: "Electric",
    level: 25
};

// Write a function called 'displayPokemon' that takes a Pokemon 
// and returns a string like "Pikachu (Electric) - Level 25"
function displayPokemon(pokemon:Pokemon):string {
const msg = `${pokemon.name} (${pokemon.type}) - Level ${pokemon.level}`; //crea el mensaje a mostrar -> "`" es Alt+96
console.log(msg); //muestra en consola
return msg; // deja el mensaje alcanzable por otras funciones
};

displayPokemon(myPokemon);