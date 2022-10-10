import { IPokemonListResponse } from '../../../domain/adapters/responses';
import { failure, success } from '../../../domain/shared/utils/either';
import { IGetPokemonsList } from '../../../domain/usecases';
import { IPokemonsListRequester } from '../../../domain/adapters';
import { GetPokemonsList } from './get-pokemons-list';
import { makePokemonList, makePrimitivePokemonsList } from './get-pokemons-list.mock';

const makePokemonsListRequester = (): IPokemonsListRequester => {
  class PokemonsListRequesterStub implements IPokemonsListRequester {
    async lists (
      offset?: string | undefined,
      limit?: string | undefined,
    ): Promise<IPokemonListResponse> {
      return new Promise((resolve) => resolve(makePrimitivePokemonsList()));
    }
  }

  return new PokemonsListRequesterStub();
};

interface ISutTypes {
  sut: IGetPokemonsList;
  pokemonsListRequesterStub: IPokemonsListRequester;
}

const sutParam = { offset: '1', limit: '20' };

const makeSut = (): ISutTypes => {
  const pokemonsListRequesterStub = makePokemonsListRequester();
  const sut = new GetPokemonsList(pokemonsListRequesterStub);

  return {
    sut,
    pokemonsListRequesterStub,
  };
};

describe('GetPokemonsList Usecase', () => {
  test('Should call PokemonsListRequester if parameters are not provided', async () => {
    const { sut, pokemonsListRequesterStub } = makeSut();
    const pokemonsListRequesterSpy = jest.spyOn(pokemonsListRequesterStub, 'lists');
    await sut.execute({});
    expect(pokemonsListRequesterSpy).toHaveBeenCalled();
  });

  test('Should call PokemonsListRequester with correct value', async () => {
    const { sut, pokemonsListRequesterStub } = makeSut();
    const pokemonsListRequesterSpy = jest.spyOn(pokemonsListRequesterStub, 'lists');
    await sut.execute(sutParam);
    expect(pokemonsListRequesterSpy).toHaveBeenCalledWith('1', '20');
  });

  test('Should return a failure error if PokemonsListRequester throws', async () => {
    const { sut, pokemonsListRequesterStub } = makeSut();
    jest
      .spyOn(pokemonsListRequesterStub, 'lists')
      .mockReturnValueOnce(new Promise((resolve, rejects) => rejects(new Error())));
    const promise = sut.execute({});
    await expect(promise).resolves.toEqual(failure(Error()));
  });

  test('Should return a success PokemonsList with success', async () => {
    const { sut } = makeSut();
    const list = await sut.execute({});
    expect(list).toEqual(success(makePokemonList()));
  });
});
