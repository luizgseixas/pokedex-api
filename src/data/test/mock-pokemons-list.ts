import { IPokemonsListRequester } from '@src/domain/adapters';
import { IPokemonListResponse } from '@src/domain/adapters/responses';
import { mockPrimitivePokemonsList } from '@src/domain/tests';

export const mockPokemonsListRequester = (): IPokemonsListRequester => {
  class PokemonsListRequesterStub implements IPokemonsListRequester {
    async lists (
      offset?: string | undefined,
      limit?: string | undefined,
    ): Promise<IPokemonListResponse> {
      return new Promise((resolve) => resolve(mockPrimitivePokemonsList()));
    }
  }

  return new PokemonsListRequesterStub();
};
