import { IFindPokemonByNameRepository } from '@src/data/contracts/db/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import { IFindPokemonByName } from '@src/domain/usecases/pokemon/find-pokemon-by-name';

export class FindPokemonByNameUseCase implements IFindPokemonByName {
  constructor (private readonly pokemonRepository: IFindPokemonByNameRepository) {}

  async execute (params: IFindPokemonByName.Params): IFindPokemonByName.Result {
    try {
      const pokemon = await this.pokemonRepository.findByName(params.name);
      return success(pokemon);
    } catch (err) {
      console.error(err);
      return failure(err);
    }
  }
}
