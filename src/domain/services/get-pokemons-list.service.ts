import { Either } from '../shared/utils/either'
import { IPokemonListResponse } from "../interfaces/interfaces";

export interface IGetPokemonsListService {
  execute: () => IGetPokemonsListService.Result;
}

export namespace IGetPokemonsListService {
  export type Result = Promise<Either<number,IPokemonListResponse>>
}
