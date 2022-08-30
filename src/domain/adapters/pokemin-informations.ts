import { IPokemonData } from './responses';

export interface IPokemonInformationsRequester {
  informations: (pokemon: string) => Promise<IPokemonData>;
}
