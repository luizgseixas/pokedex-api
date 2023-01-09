import { FamilyTreeModel } from '../../models/pokemon/family-tree';
import { Either } from '../../shared/utils/either';

export interface IMapFamilyTree {
  execute: (params: IMapFamilyTree.Params) => IMapFamilyTree.Result;
}

export namespace IMapFamilyTree {
  export type Params = {
    id: string;
  };

  export type Result = Promise<Either<Error, FamilyTreeModel[]>>;
}
