import { IGetPokemonInformations, IMapFamilyTree } from '@src/domain/usecases';
import { failure, success } from '@src/domain/shared/utils/either';
import { movesFilter } from '@src/shared/utils/moves-filter';
import { spritesFilter } from '@src/shared/utils/sprites-filter';
import { IPokemonInformationsRequester } from '@src/data/contracts/apis';

export class GetPokemonInformation implements IGetPokemonInformations {
  constructor (private readonly api: IPokemonInformationsRequester, private readonly mapFamilyTree: IMapFamilyTree) {}

  async execute ({ id }: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
    try {
      const data = await this.api.informations(id);

      const familyTree = await this.mapFamilyTree.execute({ id: data.id.toString() });

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
      // console.error(err);
      return failure(new Error());
    }
  }
}
