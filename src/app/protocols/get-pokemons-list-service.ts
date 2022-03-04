import { IPokemonListResponse } from "../interfaces/interfaces";

export interface IGetPokemonsListService {
  execute: () => Promise<string | 0>;
}
