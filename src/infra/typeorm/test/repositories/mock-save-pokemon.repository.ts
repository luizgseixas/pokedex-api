import { ISavePokemonRepository } from '@src/data/contracts/db/pokemon/save-pokemon';

export const mockSavePokemonRepo = (): ISavePokemonRepository => {
  class SavePokemonRepositoryStub implements ISavePokemonRepository {
    async save (params: ISavePokemonRepository.Params): Promise<void> {
      return Promise.resolve();
    }
  }

  return new SavePokemonRepositoryStub();
};
