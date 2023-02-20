import { failure, success } from '@src/domain/shared/utils/either';
import { IFindPokemonByName } from '@src/domain/usecases/pokemon/find-pokemon-by-name';
import { IFindPokemonByNameRepostiory } from './find-pokemon-by-name.spec';

export class FindPokemonByNameUseCase implements IFindPokemonByName {
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
