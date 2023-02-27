import { IFindPokemonByNameRepository } from '@src/data/contracts/db/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import { throwError } from '@src/domain/test';
import { mockPokemon } from '@src/domain/test/mock-pokemon';
import { mockFindPokemonByNameRepo } from '@src/infra/typeorm/test/repositories';
import { FindPokemonByNameUseCase } from './find-pokemon-by-name.usecase';

type SutTypes = {
  sut: FindPokemonByNameUseCase,
  findPokemonByNameRepositoryStub: IFindPokemonByNameRepository
}

const makeSut = (): SutTypes => {
  const findPokemonByNameRepositoryStub = mockFindPokemonByNameRepo();
  const sut = new FindPokemonByNameUseCase(findPokemonByNameRepositoryStub);

  return {
    sut,
    findPokemonByNameRepositoryStub,
  };
};

describe('FindPokemonByNameUseCase', () => {
  test('should call FindPokemonByNameRepository with correct params', async () => {
    const { sut, findPokemonByNameRepositoryStub } = makeSut();
    const findSpy = jest.spyOn(findPokemonByNameRepositoryStub, 'findByName');

    await sut.execute({ name: 'any_name' });

    expect(findSpy).toHaveBeenCalledWith('any_name');
  });

  test('should retusn a failure error if FindPokemonByNameRepository throws', async () => {
    const { sut, findPokemonByNameRepositoryStub } = makeSut();
    jest.spyOn(findPokemonByNameRepositoryStub, 'findByName').mockImplementationOnce(throwError);

    const promise = sut.execute({ name: 'any_name' });

    expect(promise).resolves.toEqual(failure(Error()));
  });

  test('should returns null if FindPokemonByNameRepository not returns', async () => {
    const { sut, findPokemonByNameRepositoryStub } = makeSut();
    jest.spyOn(findPokemonByNameRepositoryStub, 'findByName').mockResolvedValueOnce(null);

    const pokemon = await sut.execute({ name: 'any_name' });

    expect(pokemon.value).toBeNull();
  });

  test('should returns an pokemon on success', async () => {
    const { sut } = makeSut();

    const pokemon = await sut.execute({ name: 'any_name' });

    expect(pokemon).toEqual(success(mockPokemon()));
  });
});
