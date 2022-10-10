import { success } from '@src/domain/shared/utils/either';
import { IGetPokemonInformations } from '@src/domain/usecases';
import { makePokemonInformations } from '../controllers/get-pokemon-informations/get-pokemon-informations.mock';

export const mockGetPokemonInformations = () => {
  class GetPokemonInformationsStub implements IGetPokemonInformations {
    async execute (params: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
      return new Promise((resolve) => resolve(success(makePokemonInformations())));
    }
  }

  return new GetPokemonInformationsStub();
};
