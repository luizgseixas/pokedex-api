import { IPokemonListResponse } from "../interfaces";

export interface IGetPokemonsListService {
  execute: () => Promise<IPokemonListResponse | undefined | 0>;
}
