import { IMapFamilyTree } from '@src/domain/usecases/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import { chainFilter } from '@src/shared/utils/evolutions-filter';
import { IFamilyTreeRequester } from '@src/domain/adapters';

export class MapFamilyTree implements IMapFamilyTree {
  constructor (private readonly api: IFamilyTreeRequester) {}

<<<<<<< HEAD:src/data/usecases/pokemons/map-family-tree.ts
  async execute ({ pokemonId }: IMapFamilyTree.Params): IMapFamilyTree.Result {
=======
  async execute ({ id }: IMapFamilyTree.Params): IMapFamilyTree.Result {
>>>>>>> master:src/data/usecases/map-family-tree/map-family-tree.ts
    try {
      const data = await this.api.familyTree(id);

      return success(chainFilter(data.chain));
    } catch (err) {
      // console.error(err);
      return failure(err);
    }
  }
}
