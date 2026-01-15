export interface Pokemon{
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites:{
        front_default: string;
    };
    stats: PokemonStat[];
    types: PokemonType[];

}

export interface PokemonStat {
    base_stat: number;
    stat: {
        name:string;
    };
}

export interface PokemonType{
    type:{
        name:string;
    };
}

export interface TeamPokemon extends Pokemon{
    nickname?: string;
    dateAdded: string;
};