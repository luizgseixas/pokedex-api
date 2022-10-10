import { success } from '@src/domain/shared/utils/either';
import { mockPokemonList } from '@src/domain/tests';
import { IGetPokemonsList } from '@src/domain/usecases';

export const mockGetPokemonsList = (): IGetPokemonsList => {
  class GetPokemonsListStub implements IGetPokemonsList {
    async execute (params?: IGetPokemonsList.Params | undefined): IGetPokemonsList.Result {
      return new Promise((resolve) => resolve(success(mockPokemonList())));
    }
  }

  return new GetPokemonsListStub();
};
