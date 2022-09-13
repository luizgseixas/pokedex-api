import { GetPokemonInformationsController } from '../get-pokemon-informations.controller';
import { IGetPokemonInformations } from '../../../domain/usecases/pokemon';
import { makePokemonInformations } from './__mocks__/get-pokemon-informations.mock';
import { failure, success } from '../../../domain/shared/utils/either';
import { HttpRequest } from '../../protocols';
import { ok, serverError } from '../../helpers/http-helper';

const makeGetPokemonInformations = () => {
  class GetPokemonInformationsStub implements IGetPokemonInformations {
    async execute (params: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
      return new Promise((resolve) => resolve(success(makePokemonInformations())));
    }
  }

  return new GetPokemonInformationsStub();
};

const makeHttpRequest = (): HttpRequest => ({
  params: { pokemonId: '1' },
});

interface SutTypes {
  sut: GetPokemonInformationsController,
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
    const infoSpy = jest.spyOn(getPokemonInformationsStub, 'execute');
    await sut.handle(makeHttpRequest());
    expect(infoSpy).toHaveBeenCalledWith({ pokemonId: '1' });
  });

  test('Should returns 500 if GetPokemonInformations throws', async () => {
    const { sut, getPokemonInformationsStub } = makeSut();
    jest.spyOn(getPokemonInformationsStub, 'execute').mockReturnValueOnce(
      new Promise(((resolve) => resolve(failure(new Error())))),
    );
    const promise = sut.handle(makeHttpRequest());
    await expect(promise).resolves.toEqual(serverError(new Error()));
  });

  test('Should return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(makeHttpRequest());
    expect(httpResponse).toEqual(ok(makePokemonInformations()));
  });
});
