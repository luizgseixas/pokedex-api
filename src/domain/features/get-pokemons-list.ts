import { Either } from '../shared/utils/either';
import { IPokemonListResponse } from '../adapters/responses';

export interface IGetPokemonsList {
  execute: () => IGetPokemonsList.Result;
}

export namespace IGetPokemonsList {
  export type Result = Promise<Either<Error, IPokemonListResponse>>;
}
