import { Either } from '../shared/utils/either';

export interface IMapFamilyTree {
  execute: (params: IMapFamilyTree.Params) => IMapFamilyTree.Result;
}

export interface IPokemonFamilyTree {
  first_evolution: {
    name: string;
  };
  second_evolution?:
    | {
        name: string;
        evolves_details: Record<string, unknown>;
      }
    | Record<string, unknown>;
  third_evolution?:
    | {
        name: string;
        evolves_details: Record<string, unknown>;
      }
    | Record<string, unknown>;
}

export namespace IMapFamilyTree {
  export type Params = {
    pokemonId: string;
  };

  export type Result = Promise<Either<Error, IPokemonFamilyTree>>;
}
