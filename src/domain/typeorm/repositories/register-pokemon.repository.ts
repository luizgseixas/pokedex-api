import { Pokemon } from '@src/domain/typeorm/entities/pokemon';

export interface IPokemonRepository {
  registerPokemon: () => Pokemon;
}
