import { IPokemonListResponse } from './responses';

export interface PokemonsListRequester {
  lists: (offset?: string, limit?: string) => Promise<IPokemonListResponse>;
}
