import { IGetPokemonInformation, IMapFamilyTree } from '@src/domain/usecases';
import { left, right } from '@src/domain/shared/utils/either';
import { movesFilter } from '@src/shared/utils/moves-filter';
import { spritesFilter } from '@src/shared/utils/sprites-filter';
import { IPokemonApi } from '@src/domain/adapters/api';

export class GetPokemonInformation implements IGetPokemonInformation {
  private readonly api: IPokemonApi;
  private readonly mapFamilyTree: IMapFamilyTree;

  constructor(mapFamilyTree: IMapFamilyTree, api: IPokemonApi) {
    this.api = api;
    this.mapFamilyTree = mapFamilyTree;
  }

  async execute({ pokemon }: IGetPokemonInformation.Params): IGetPokemonInformation.Result {
    try {
      const data = await this.api.getPokemonInformations(pokemon);

      const familyTree = await this.mapFamilyTree.execute({ pokemonId: data.id.toString() });

      if (familyTree.isLeft()) {
        return left(familyTree.value);
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

      return right(information);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
