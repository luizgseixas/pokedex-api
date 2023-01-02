import { IPokemonsListRequester } from '@src/domain/adapters';
import { PokemonListResponse } from '@src/domain/adapters/responses';
import { mockPrimitivePokemonsList } from '@src/domain/test';

export const mockPokemonsListRequester = (): IPokemonsListRequester => {
  class PokemonsListRequesterStub implements IPokemonsListRequester {
    async lists (
      offset?: string | undefined,
      limit?: string | undefined,
    ): Promise<PokemonListResponse> {
      return Promise.resolve(mockPrimitivePokemonsList());
    }
  }

  return new PokemonsListRequesterStub();
};
