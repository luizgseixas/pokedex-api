import { Either } from '../shared/utils/either';
import { IFamilyTree } from '../adapters/responses';

export interface IMapFamilyTree {
  execute: (params: IMapFamilyTree.Params) => IMapFamilyTree.Result;
}

export namespace IMapFamilyTree {
  export type Params = {
    pokemonId: string;
  };

  export type Result = Promise<Either<Error, any>>;
}
