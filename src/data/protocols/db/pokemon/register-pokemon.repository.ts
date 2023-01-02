import { Pokemon } from '@src/domain/models/pokemon';

export interface IPokemonRepository {
  registerPokemon: () => Pokemon;
}
