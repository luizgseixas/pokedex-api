import { IPokemonsListRequester } from '@src/data/contracts/apis';
import { PokemonListResponse } from '@src/data/contracts/apis/responses';
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
