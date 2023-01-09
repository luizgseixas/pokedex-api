import { ISavePokemonRepository } from '@src/data/contracts/db/pokemon/save-pokemon';
import { failure } from '@src/domain/shared/utils/either';
import { ISavePokemon } from '@src/domain/usecases/pokemon/save-pokemon';

export class SavePokemonUseCase implements ISavePokemon {
  constructor (private readonly pokemonRepository: ISavePokemonRepository) {}

  async execute (params: ISavePokemon.Params): ISavePokemon.Result {
    try {
      await this.pokemonRepository.save(params);
    } catch (err) {
      return failure(err);
    }
  }
}
