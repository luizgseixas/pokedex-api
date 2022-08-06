import { IGetPokemonInformations, IMapFamilyTree } from '@src/domain/usecases';
import { failure, success } from '@src/domain/shared/utils/either';
import { movesFilter } from '@src/shared/utils/moves-filter';
import { spritesFilter } from '@src/shared/utils/sprites-filter';
import { PokemonInformationsRequester } from '@src/domain/adapters';

export class GetPokemonInformation implements IGetPokemonInformations {
  private readonly api: PokemonInformationsRequester;

  private readonly mapFamilyTree: IMapFamilyTree;

  constructor (mapFamilyTree: IMapFamilyTree, api: PokemonInformationsRequester) {
    this.api = api;
    this.mapFamilyTree = mapFamilyTree;
  }

  async execute ({ pokemon }: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
    try {
      const data = await this.api.informations(pokemon);

      const familyTree = await this.mapFamilyTree.execute({ pokemonId: data.id.toString() });

      if (familyTree.isFailure()) {
        return failure(familyTree.value);
      }

      const information = {
        id: data.id,
        name: data.name,
        stats: data.stats,
        types: data.types,
        sprites: spritesFilter(data.sprites),
        moves: movesFilter(data.moves),
        familyTree: familyTree.value,
      };

      return success(information);
    } catch (err) {
      console.error(err);
      return failure(err);
    }
  }
}
