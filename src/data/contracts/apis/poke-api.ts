import {
  PokemonDataResponse, EvolutionChainResponse, PokemonListResponse,
} from './responses';

export interface IPokemonsListRequester {
  lists: (offset?: string, limit?: string) => Promise<PokemonListResponse>;
}
export interface IPokemonInformationsRequester {
  informations: (pokemon: string) => Promise<PokemonDataResponse>;
}

export interface IFamilyTreeRequester {
  familyTree: (id: string) => Promise<EvolutionChainResponse>;
}
