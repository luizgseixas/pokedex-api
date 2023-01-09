import { success } from '@src/domain/shared/utils/either';
import { mockPokemonInformations } from '@src/domain/test';
import { IGetPokemonInformations } from '@src/domain/usecases/pokemon';

export const mockGetPokemonInformations = () => {
  class GetPokemonInformationsStub implements IGetPokemonInformations {
    async execute (params: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
      return Promise.resolve(success(mockPokemonInformations()));
    }
  }

  return new GetPokemonInformationsStub();
};
