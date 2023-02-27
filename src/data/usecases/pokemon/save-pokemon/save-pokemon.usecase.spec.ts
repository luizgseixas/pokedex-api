import { ISavePokemonRepository } from '@src/data/contracts/db/pokemon/save-pokemon';
import { failure } from '@src/domain/shared/utils/either';
import { throwError } from '@src/domain/test';
import { mockPokemon } from '@src/domain/test/mock-pokemon';
import { mockSavePokemonRepo } from '@src/infra/typeorm/test/repositories';
import { SavePokemonUseCase } from './save-pokemon.usecase';

type SutTypes = {
  sut: SavePokemonUseCase
  savePokemonRepo: ISavePokemonRepository
}

const makeSut = (): SutTypes => {
  const savePokemonRepo = mockSavePokemonRepo();
  const sut = new SavePokemonUseCase(savePokemonRepo);

  return {
    sut,
    savePokemonRepo,
  };
};

describe('SavePokemonUseCase', () => {
  it('should call SavePokemonRepository with correct params', async () => {
    const { sut, savePokemonRepo } = makeSut();
    const saveSpy = jest.spyOn(savePokemonRepo, 'save');

    await sut.execute(mockPokemon());

    expect(saveSpy).toHaveBeenCalledWith(mockPokemon());
  });

  it('should return a failure error if SavePokemonRepository throws', async () => {
    const { sut, savePokemonRepo } = makeSut();
    jest.spyOn(savePokemonRepo, 'save').mockImplementationOnce(throwError);

    const promise = sut.execute(mockPokemon());

    expect(promise).resolves.toEqual(failure(Error()));
  });
});
