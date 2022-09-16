import { IGetPokemonInformations, IMapFamilyTree } from '@src/domain/usecases/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import { movesFilter } from '@src/shared/utils/moves-filter';
import { spritesFilter } from '@src/shared/utils/sprites-filter';
import { IPokemonInformationsRequester } from '@src/domain/adapters';

export class GetPokemonInformation implements IGetPokemonInformations {
<<<<<<< HEAD:src/data/usecases/pokemons/get-pokemon-informations.ts
  constructor (private readonly mapFamilyTree: IMapFamilyTree, private readonly api: IPokemonInformationsRequester) {}

  async execute ({ pokemon }: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
=======
  constructor (
    private readonly api: IPokemonInformationsRequester,
    private readonly mapFamilyTree: IMapFamilyTree,
  ) {}

  async execute ({ id }: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
>>>>>>> master:src/data/usecases/get-pokemon-informations/get-pokemon-informations.ts
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
      return failure(err);
    }
  }
}
