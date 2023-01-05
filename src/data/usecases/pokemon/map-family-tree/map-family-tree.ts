import { IMapFamilyTree } from '@src/domain/usecases/map-family-tree';
import { failure, success } from '@src/domain/shared/utils/either';
import { chainFilter } from '@src/shared/utils/evolutions-filter';
import { IFamilyTreeRequester } from '@src/data/contracts/apis';

export class MapFamilyTree implements IMapFamilyTree {
  constructor (private readonly api: IFamilyTreeRequester) {}

  async execute ({ id }: IMapFamilyTree.Params): IMapFamilyTree.Result {
    try {
      const data = await this.api.familyTree(id);

      return success(chainFilter(data.chain));
    } catch (err) {
      return failure(new Error());
    }
  }
}
