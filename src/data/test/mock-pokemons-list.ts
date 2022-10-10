import { IPokemonsListRequester } from '@src/domain/adapters';
import { IPokemonListResponse } from '@src/domain/adapters/responses';
import { makePrimitivePokemonsList } from '../usecases/get-pokemons-list/get-pokemons-list.mock';

export const mockPokemonsListRequester = (): IPokemonsListRequester => {
  class PokemonsListRequesterStub implements IPokemonsListRequester {
    async lists (
      offset?: string | undefined,
      limit?: string | undefined,
    ): Promise<IPokemonListResponse> {
      return new Promise((resolve) => resolve(makePrimitivePokemonsList()));
    }
  }

  return new PokemonsListRequesterStub();
};
