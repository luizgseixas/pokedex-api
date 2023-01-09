import { success } from '@src/domain/shared/utils/either';
import { mockFamilyTreeThree } from '@src/domain/test';
import { IMapFamilyTree } from '@src/domain/usecases/pokemon';

export const mockMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute (params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      return Promise.resolve(success(mockFamilyTreeThree()));
    }
  }

  return new MapFamilyTreeStub();
};
