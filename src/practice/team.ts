// 1. Create an array type that holds multiple Pokemon
interface Pokemon {
name: string;
type: string;
level: number;

};

//    Call the variable 'myTeam' and add 3 different Pokemon to it
let myTeam: Pokemon[] = [
    {
        name: "Pikachu", type: "Electric", level: 25
    },
    {
        name: "Ampharos", type: "Electric", level: 99
    },
    {
        name: "Tyranitar", type: "Ground", level: 35
    }
];


// 2. Write a function called 'getStrongestPokemon' that:
//    - Takes an array of Pokemon
//    - Returns the Pokemon with the highest level
//    - Return type should be Pokemon

function getStrongestPokemon(team:Pokemon[]):Pokemon{
    let strongest = team[0];
    let i : number;

    for(i=1; i < team.length; i++){
        if (team[i].level>strongest.level){
            strongest=team[i];
        }
    }
    return strongest;
};



// 3. Write a function called 'getTeamSize' that:
//    - Takes an array of Pokemon  
//    - Returns a number (the team size)
//    - Make sure to add the return type!
function getTeamSize (team:Pokemon[]):number{
    return team.length;
    };


// 4. Call both functions and console.log the results

const winner = getStrongestPokemon(myTeam);
const teamSize = getTeamSize(myTeam);
console.log(`Strongest Pokemon is: ${winner.name} (Level ${winner.level})`);
console.log(`Team Size is: ${teamSize}`);