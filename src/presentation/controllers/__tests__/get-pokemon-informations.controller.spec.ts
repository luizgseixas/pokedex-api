import { GetPokemonInformationsController } from '../get-pokemon-informations.controller';
import { IController } from '../../protocols/controller';
import { IGetPokemonInformations } from '../../../domain/usecases';
import { makePokemonInformations } from './__mocks__/get-pokemons-informations.mock';
import { right } from '../../../domain/shared/utils/either';

const makeGetPokemonInformations = () => {
  class GetPokemonInformationsStub implements IGetPokemonInformations {
    async execute(params: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
      return new Promise((resolve) => resolve(right(makePokemonInformations())));
    }
  }

  return new GetPokemonInformationsStub();
};

interface SutTypes {
  sut: IController,
  getPokemonInformationsStub: IGetPokemonInformations
}

const makeSut = (): SutTypes => {
  const getPokemonInformationsStub = makeGetPokemonInformations();
  const sut = new GetPokemonInformationsController(getPokemonInformationsStub);

  return {
    sut,
    getPokemonInformationsStub,
  };
};

describe('GetPokemonInformations Controller', () => {
  test('Should call GetPokemonInformations with correct value', async () => {
    const { sut, getPokemonInformationsStub } = makeSut();
  });
});
