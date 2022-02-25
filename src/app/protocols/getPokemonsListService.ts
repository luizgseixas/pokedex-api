import { IPokemonListResponse } from "../interfaces/interfaces";

export interface IGetPokemonsListService {
  execute: () => Promise<IPokemonListResponse | undefined | 0>;
}
