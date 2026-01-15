export interface Pokemon{
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites:{
        front_default: string;
    };
}

export interface TeamPokemon extends Pokemon{
    nickname?: string;
    dateAdded: string;
};