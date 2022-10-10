import { IPokemonsListRequester } from '../../../domain/adapters';
import { failure, success } from '../../../domain/shared/utils/either';
import { throwError } from '../../../domain/tests';
import { IGetPokemonsList } from '../../../domain/usecases';
import { mockPokemonsListRequester } from '../../test';
import { GetPokemonsList } from './get-pokemons-list';
import { makePokemonList } from './get-pokemons-list.mock';

type SutTypes = {
  sut: IGetPokemonsList;
  pokemonsListRequesterStub: IPokemonsListRequester;
}

const sutParam = { offset: '1', limit: '20' };

const makeSut = (): SutTypes => {
  const pokemonsListRequesterStub = mockPokemonsListRequester();
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
      .mockImplementationOnce(throwError);
    const promise = sut.execute({});
    await expect(promise).resolves.toEqual(failure(Error()));
  });

  test('Should return a success PokemonsList with success', async () => {
    const { sut } = makeSut();
    const list = await sut.execute({});
    expect(list).toEqual(success(makePokemonList()));
  });
});
