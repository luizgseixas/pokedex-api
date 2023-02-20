import { PokemonModel } from '@src/domain/models/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import { throwError } from '@src/domain/test';
import { mockPokemon } from '@src/domain/test/mock-pokemon';
import { IFindPokemonByName } from '@src/domain/usecases/pokemon/find-pokemon-by-name';

export interface IFindPokemonByNameRepostiory {
  findByName: (name: string) => Promise<PokemonModel>;
}

export class FindPokemonByNameRepositoryStub implements IFindPokemonByNameRepostiory {
  async findByName (name: string): Promise<PokemonModel> {
    return Promise.resolve(mockPokemon());
  }
}

export class FindPokemonByNameUseCase {
  constructor (private readonly pokemonRepository: IFindPokemonByNameRepostiory) {}

  async execute (params: IFindPokemonByName.Params): Promise<any> {
    try {
      const pokemon = await this.pokemonRepository.findByName(params.name);
      return success(pokemon);
    } catch (err) {
      console.error(err);
      return failure(err);
    }
  }
}

type SutTypes = {
  sut: FindPokemonByNameUseCase,
  findPokemonByNameRepositoryStub: IFindPokemonByNameRepostiory
}

const makeSut = (): SutTypes => {
  const findPokemonByNameRepositoryStub = new FindPokemonByNameRepositoryStub();
  const sut = new FindPokemonByNameUseCase(findPokemonByNameRepositoryStub);

  return {
    sut,
    findPokemonByNameRepositoryStub,
  };
};

describe('FindPokemonByNameUseCase', () => {
  test('sould call FindPokemonByNameRepository with correct params', async () => {
    const { sut, findPokemonByNameRepositoryStub } = makeSut();
    const findSpy = jest.spyOn(findPokemonByNameRepositoryStub, 'findByName');

    await sut.execute({ name: 'any_name' });

    expect(findSpy).toHaveBeenCalledWith('any_name');
  });

  test('sould retusn a failure error if FindPokemonByNameRepository throws', async () => {
    const { sut, findPokemonByNameRepositoryStub } = makeSut();
    jest.spyOn(findPokemonByNameRepositoryStub, 'findByName').mockImplementationOnce(throwError);

    const promise = sut.execute({ name: 'any_name' });

    expect(promise).resolves.toEqual(failure(Error()));
  });

  test('sould returns null if FindPokemonByNameRepository not returns', async () => {
    const { sut, findPokemonByNameRepositoryStub } = makeSut();
    jest.spyOn(findPokemonByNameRepositoryStub, 'findByName').mockResolvedValueOnce(null);

    const pokemon = await sut.execute({ name: 'any_name' });

    expect(pokemon.value).toBeNull();
  });

  test('sould returns an pokemon on success', async () => {
    const { sut } = makeSut();

    const pokemon = await sut.execute({ name: 'any_name' });

    expect(pokemon).toEqual(success(mockPokemon()));
  });
});
