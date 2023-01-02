import { PokemonData } from './responses';

export interface IPokemonInformationsRequester {
  informations: (pokemon: string) => Promise<PokemonData>;
}
