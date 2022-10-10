import { GetPokemonInformationsController } from './get-pokemon-informations.controller';
import { IGetPokemonInformations } from '../../../domain/usecases';
import { failure, success } from '../../../domain/shared/utils/either';
import { IHttpRequest } from '../../protocols';
import { ok, serverError } from '../../helpers/http-helper';
import { mockGetPokemonInformations } from '../../test';
import { mockPokemonInformations } from '../../../domain/test';

const mockHttpRequest = (): IHttpRequest => ({
  params: { pokemonId: '1' },
});

type SutTypes = {
  sut: GetPokemonInformationsController,
  getPokemonInformationsStub: IGetPokemonInformations
}

const makeSut = (): SutTypes => {
  const getPokemonInformationsStub = mockGetPokemonInformations();
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
    await sut.handle(mockHttpRequest());
    expect(infoSpy).toHaveBeenCalledWith('1');
  });

  test('Should returns 500 if GetPokemonInformations throws', async () => {
    const { sut, getPokemonInformationsStub } = makeSut();
    jest.spyOn(getPokemonInformationsStub, 'execute').mockReturnValueOnce(Promise.resolve(failure(new Error())));
    const promise = sut.handle(mockHttpRequest());
    await expect(promise).resolves.toEqual(serverError(new Error()));
  });

  test('Should return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(mockHttpRequest());
    expect(httpResponse).toEqual(ok(mockPokemonInformations()));
  });
});
