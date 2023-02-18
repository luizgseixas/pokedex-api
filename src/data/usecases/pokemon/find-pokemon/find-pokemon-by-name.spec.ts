import { PokemonModel } from '@src/domain/models/pokemon';
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
    await this.pokemonRepository.findByName(params.name);
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
  it('sould call FindPokemonByNameRepository with correct params', async () => {
    const { sut, findPokemonByNameRepositoryStub } = makeSut();
    const findSpy = jest.spyOn(findPokemonByNameRepositoryStub, 'findByName');

    await sut.execute({ name: 'Charmander' });

    expect(findSpy).toHaveBeenCalledWith('Charmander');
  });
});
