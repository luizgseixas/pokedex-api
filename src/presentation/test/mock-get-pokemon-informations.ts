import { success } from '@src/domain/shared/utils/either';
import { mockPokemonInformations } from '@src/domain/tests';
import { IGetPokemonInformations } from '@src/domain/usecases';

export const mockGetPokemonInformations = () => {
  class GetPokemonInformationsStub implements IGetPokemonInformations {
    async execute (params: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
      return new Promise((resolve) => resolve(success(mockPokemonInformations())));
    }
  }

  return new GetPokemonInformationsStub();
};
