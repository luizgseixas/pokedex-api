import { GetPokemonsListController } from './get-pokemons-list.controller';
import { IGetPokemonsList } from '../../../domain/usecases';
import { IHttpRequest } from '../../protocols';
import { failure } from '../../../domain/shared/utils/either';
import { ok, serverError } from '../../helpers/http-helper';
import { mockGetPokemonsList } from '../../test';
import { mockPokemonList } from '../../../domain/tests';

const mockHttpRequest = (): IHttpRequest => ({
  query: {
    offset: '0',
    limit: '20',
  },
});

type SutTypes = {
  sut: GetPokemonsListController,
  getPokemonsListStub: IGetPokemonsList
}

const makeSut = (): SutTypes => {
  const getPokemonsListStub = mockGetPokemonsList();
  const sut = new GetPokemonsListController(getPokemonsListStub);
  return {
    sut,
    getPokemonsListStub,
  };
};

describe('GetPokemonsList Controller', () => {
  test('Should call GetPokemonsList with correct values', async () => {
    const { sut, getPokemonsListStub } = makeSut();
    const listStub = jest.spyOn(getPokemonsListStub, 'execute');
    await sut.handle(mockHttpRequest());
    expect(listStub).toHaveBeenCalledWith({ offset: '0', limit: '20' });
  });

  test('Should return 500 if GetPokemonsList return a failure error', async () => {
    const { sut, getPokemonsListStub } = makeSut();
    jest.spyOn(getPokemonsListStub, 'execute').mockReturnValue(Promise.resolve(failure(new Error())));
    const httpResponse = await sut.handle(mockHttpRequest());
    expect(httpResponse).toEqual(serverError(new Error()));
  });

  test('Sould return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(mockHttpRequest());
    expect(httpResponse).toEqual(ok(mockPokemonList()));
  });
});
