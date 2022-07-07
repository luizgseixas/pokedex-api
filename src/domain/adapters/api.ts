import { IFamilyTree, IPokemonData, IPokemonListResponse } from './responses';

export interface IPokemonApi {
  getPokemonLists: (offset?: string, limit?: string) => Promise<IPokemonListResponse>;
  getPokemonInformations: (pokemon: string) => Promise<IPokemonData>;

  getFamilyTree: (pokemonId: string) => Promise<IFamilyTree>;
}
