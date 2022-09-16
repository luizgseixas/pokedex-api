import { GetPokemonsListController } from './get-pokemons-list.controller';
import { IGetPokemonsList } from '../../../domain/usecases/pokemon';
import { fakePokemonList } from './get-pokemons-list.mock';
import { IHttpRequest } from '../../protocols';
import { failure, success } from '../../../domain/shared/utils/either';
import { ok, serverError } from '../../helpers/http-helper';

const makeGetPokemonsList = (): IGetPokemonsList => {
  class GetPokemonsListStub implements IGetPokemonsList {
    async execute (params?: IGetPokemonsList.Params | undefined): IGetPokemonsList.Result {
      return new Promise((resolve) => resolve(success(fakePokemonList)));
    }
  }

  return new GetPokemonsListStub();
};

const makeFakeRequest = (): IHttpRequest => ({
  query: {
    offset: '0',
    limit: '20',
  },
});

interface ISutTypes {
  sut: GetPokemonsListController,
  getPokemonsListStub: IGetPokemonsList
}

const makeSut = (): ISutTypes => {
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

  test('Should return 500 if GetPokemonsList return a failure error', async () => {
    const { sut, getPokemonsListStub } = makeSut();
    jest.spyOn(getPokemonsListStub, 'execute').mockReturnValue(new Promise((resolve) => resolve(failure(new Error()))));
    const httpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(serverError(new Error()));
  });

  test('Sould return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(ok(fakePokemonList));
  });
});
