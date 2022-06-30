import {
  IMove,
  IPokemonData,
  ISprite,
  IStat,
  IType,
} from '../adapters/responses/pokemon-informations';
import { Either } from '../shared/utils/either';
import { IPokemonFamilyTree } from './map-family-tree';

export interface IGetPokemonInformation {
  execute: (params: IGetPokemonInformation.Params) => IGetPokemonInformation.Result;
}

export namespace IGetPokemonInformation {
  export type Params = {
    pokemon: string;
  };

  type Moves = {
    name: string;
    url: string;
  };

  export type Result = Promise<
    Either<
      Error,
      {
        id: number;
        name: string;
        sprites: ISprite;
        stats: IStat[];
        types: IType[];
        moves: Moves[];
        familyTree: IPokemonFamilyTree;
      }
    >
  >;
}
