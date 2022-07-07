import { PokemonApi } from '@src/adapters/poke-api/api';
import { IGetPokemonInformation, IMapFamilyTree } from '@src/domain/usecases';
import { left, right } from '@src/domain/shared/utils/either';
import { movesFilter } from '@src/shared/utils/moves-filter';
import { spritesFilter } from '@src/shared/utils/sprites-filter';

export class GetPokemonInformationFeature implements IGetPokemonInformation {
  private readonly api: PokemonApi;
  private readonly mapFamilyTreeFeature: IMapFamilyTree;

  constructor(mapFamilyTreeFeature: IMapFamilyTree) {
    this.api = new PokemonApi();
    this.mapFamilyTreeFeature = mapFamilyTreeFeature;
  }

  async execute({ pokemon }: IGetPokemonInformation.Params): IGetPokemonInformation.Result {
    try {
      const { data } = await this.api.getPokemonInformations(pokemon);

      const familyTree = await this.mapFamilyTreeFeature.execute({ pokemonId: data.id.toString() });

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
