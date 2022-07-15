import { FamilyTreeModel } from '../models/family-tree';
import { Either } from '../shared/utils/either';

export interface IMapFamilyTree {
  execute: (params: IMapFamilyTree.Params) => IMapFamilyTree.Result;
}

export namespace IMapFamilyTree {
  export type Params = {
    pokemonId: string;
  };

  export type Result = Promise<Either<Error, FamilyTreeModel>>;
}
