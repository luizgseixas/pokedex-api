import { PokemonModel } from '@src/domain/models/pokemon';

export interface IFindPokemonByNameRepository {
  findByName: (name: string) => Promise<PokemonModel>;
}
