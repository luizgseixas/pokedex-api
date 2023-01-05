import { PokemonData, EvolutionChain, PokemonListResponse } from './responses';

export interface IPokemonInformationsRequester {
  informations: (pokemon: string) => Promise<PokemonData>;
}

export interface IFamilyTreeRequester {
  familyTree: (id: string) => Promise<EvolutionChain>;
}

export interface IPokemonsListRequester {
  lists: (offset?: string, limit?: string) => Promise<PokemonListResponse>;
}
