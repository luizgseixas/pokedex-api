import { IFindPokemonByNameRepository } from '@src/data/contracts/db/pokemon/find-pokemon-by-name';
import { PokemonModel } from '@src/domain/models/pokemon';
import { mockPokemon } from '@src/domain/test/mock-pokemon';

export const mockFindPokemonByNameRepo = () => {
  class FindPokemonByNameRepositoryStub implements IFindPokemonByNameRepository {
    async findByName (name: string): Promise<PokemonModel> {
      return Promise.resolve(mockPokemon());
    }
  }

  return new FindPokemonByNameRepositoryStub();
};
