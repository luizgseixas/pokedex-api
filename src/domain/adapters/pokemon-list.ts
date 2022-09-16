import { IPokemonListResponse } from './responses';

export interface IPokemonsListRequester {
  lists: (offset?: string, limit?: string) => Promise<IPokemonListResponse>;
}
