import { PokemonsListRequester } from '@src/domain/adapters';
import { IPokemonListResponse } from '@src/domain/adapters/responses';
import { IGetPokemonsList } from '@src/domain/usecases';
import { GetPokemonsList } from '../get-pokemons-list';
import { makePrimitivePokemonsList } from './mocks';

const makePokemonsListRequester = (): PokemonsListRequester => {
  class PokemonsListRequesterStub implements PokemonsListRequester {
    async lists(
      offset?: string | undefined,
      limit?: string | undefined,
    ): Promise<IPokemonListResponse> {
      return new Promise((resolve) => resolve(makePrimitivePokemonsList()));
    }
  }

  return new PokemonsListRequesterStub();
};

interface SutTypes {
  sut: IGetPokemonsList;
  pokemonsListRequesterStub: PokemonsListRequester;
}

const sutParam = { pokemonId: '1' };

const makeSut = (): SutTypes => {
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
    await sut.execute();
    expect(pokemonsListRequesterSpy).toHaveBeenCalled();
  });

  test('Should call PokemonsListRequester with correct value', async () => {
    const { sut, pokemonsListRequesterStub } = makeSut();
    const pokemonsListRequesterSpy = jest.spyOn(pokemonsListRequesterStub, 'lists');
    await sut.execute({ offset: '1', limit: '20' });
    expect(pokemonsListRequesterSpy).toHaveBeenCalledWith('1', '20');
  });
});
