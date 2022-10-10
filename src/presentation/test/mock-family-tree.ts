import { success } from '@src/domain/shared/utils/either';
import { IMapFamilyTree } from '@src/domain/usecases';
import { makeFamilyTree } from '../controllers/get-family-tree/get-family-tree.mock';

export const mockMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute (params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      return new Promise((resolve) => resolve(success(makeFamilyTree())));
    }
  }

  return new MapFamilyTreeStub();
};
