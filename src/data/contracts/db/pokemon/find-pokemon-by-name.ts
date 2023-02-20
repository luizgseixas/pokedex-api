import { PokemonModel } from '@src/domain/models/pokemon';

export interface IFindPokemonByNameRepostiory {
  findByName: (name: string) => Promise<PokemonModel>;
}
