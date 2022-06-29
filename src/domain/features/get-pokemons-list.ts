import { Either } from '../shared/utils/either';
import { IPokemonListResponse } from '../interfaces/interfaces';

export interface IGetPokemonsList {
  execute: () => IGetPokemonsList.Result;
}

export namespace IGetPokemonsList {
  export type Result = Promise<Either<number, IPokemonListResponse>>;
}
