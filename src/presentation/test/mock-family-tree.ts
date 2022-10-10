import { success } from '@src/domain/shared/utils/either';
import { mockFamilyTreeThree } from '@src/domain/tests';
import { IMapFamilyTree } from '@src/domain/usecases';

export const mockMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute (params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      return new Promise((resolve) => resolve(success(mockFamilyTreeThree())));
    }
  }

  return new MapFamilyTreeStub();
};
