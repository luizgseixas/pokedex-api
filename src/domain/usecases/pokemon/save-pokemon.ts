import { PokemonModel } from '@src/domain/models/pokemon';
import { Either } from '../../shared/utils/either';

export interface ISavePokemon {
  execute: (params: ISavePokemon.Params) => ISavePokemon.Result;
}

export namespace ISavePokemon {
  export type Params = PokemonModel

  export type Result = Promise<Either<Error, void>>;
}
