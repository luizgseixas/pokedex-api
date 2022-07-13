import { IPokemonData } from "./responses";

export interface PokemonInformationsRequester {
  informations: (pokemon: string) => Promise<IPokemonData>;
}