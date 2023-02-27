import { PokemonModel } from '@src/domain/models/pokemon';
import { Either } from '@src/domain/shared/utils/either';

export interface IFindPokemonByName {
  execute: (parmas: IFindPokemonByName.Params) => IFindPokemonByName.Result
}

export namespace IFindPokemonByName {
  export type Params = {
    name: string;
  }

  export type Result = Promise<Either<Error, PokemonModel>>;
}
