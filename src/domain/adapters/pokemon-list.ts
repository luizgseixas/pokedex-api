import { PokemonListResponse } from './responses';

export interface IPokemonsListRequester {
  lists: (offset?: string, limit?: string) => Promise<PokemonListResponse>;
}
