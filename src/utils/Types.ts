export interface AppTypeInitialState {
  toasts: string[];
}

export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: undefined | generatedPokemonType[];
  compareQueue: generatedPokemonType[];
}

export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonType {
  name: string;
  id: number;
  image: string;
  types: pokemonTypeInterfase[];
}

export interface pokemonTypeInterfase {
  [key: string]: {
    image: string;
    resistance: string[];
    strength: string[];
    weakness: string[];
    vulnerable: string[];
  };
}

export interface userPokemonsType extends generatedPokemonType {
  firebaseId?: string;
}
