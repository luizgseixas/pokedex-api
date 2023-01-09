import { success } from '@src/domain/shared/utils/either';
import { mockPokemonList } from '@src/domain/test';
import { IGetPokemonsList } from '@src/domain/usecases/pokemon';

export const mockGetPokemonsList = (): IGetPokemonsList => {
  class GetPokemonsListStub implements IGetPokemonsList {
    async execute (params?: IGetPokemonsList.Params | undefined): IGetPokemonsList.Result {
      return Promise.resolve(success(mockPokemonList()));
    }
  }

  return new GetPokemonsListStub();
};
