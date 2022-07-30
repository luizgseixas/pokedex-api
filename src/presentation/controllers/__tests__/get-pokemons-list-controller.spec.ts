import { GetPokemonsListController } from '../get-pokemons-list.controller';
import { IGetPokemonsList } from '../../../domain/usecases';
import { fakePokemonList } from './__mocks__/get-pokemons-list.mock';
import { HttpRequest } from '../../protocols';
import { left, right } from '../../../domain/shared/utils/either';
import { ok, serverError } from '../../helpers/http-helper';

const makeGetPokemonsList = (): IGetPokemonsList => {
  class GetPokemonsListStub implements IGetPokemonsList {
    async execute (params?: IGetPokemonsList.Params | undefined): IGetPokemonsList.Result {
      return new Promise((resolve) => resolve(right(fakePokemonList)));
    }
  }

  return new GetPokemonsListStub();
};

const makeFakeRequest = (): HttpRequest => ({
  query: {
    offset: '0',
    limit: '20',
  },
});

interface SutTypes {
  sut: GetPokemonsListController,
  getPokemonsListStub: IGetPokemonsList
}

const makeSut = (): SutTypes => {
  const getPokemonsListStub = makeGetPokemonsList();
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
    await sut.handle(makeFakeRequest());
    expect(listStub).toHaveBeenCalledWith({ offset: '0', limit: '20' });
  });

  test('Should return 500 if GetPokemonsList return a left error', async () => {
    const { sut, getPokemonsListStub } = makeSut();
    jest.spyOn(getPokemonsListStub, 'execute').mockReturnValue(new Promise((resolve) => resolve(left(new Error()))));
    const httpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(serverError(new Error()));
  });

  test('Sould return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(ok(fakePokemonList));
  });
});
