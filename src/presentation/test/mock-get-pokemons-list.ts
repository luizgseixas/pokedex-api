import { success } from '@src/domain/shared/utils/either';
import { IGetPokemonsList } from '@src/domain/usecases';
import { fakePokemonList } from '../controllers/get-pokemons-list/get-pokemons-list.mock';

export const mockGetPokemonsList = (): IGetPokemonsList => {
  class GetPokemonsListStub implements IGetPokemonsList {
    async execute (params?: IGetPokemonsList.Params | undefined): IGetPokemonsList.Result {
      return new Promise((resolve) => resolve(success(fakePokemonList())));
    }
  }

  return new GetPokemonsListStub();
};
