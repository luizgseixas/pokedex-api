import { ISavePokemonRepository } from '@src/data/contracts/db/pokemon/save-pokemon';
import { Repository } from 'typeorm';
import { PokemonsEntity } from '../entities';

export class PokemonsRepository implements ISavePokemonRepository {
  constructor (private readonly pokemonsRepository: Repository<PokemonsEntity>) {}

  async save (params: ISavePokemonRepository.Params): ISavePokemonRepository.Result {
    const pokemon = this.pokemonsRepository.create(params);
    await this.pokemonsRepository.save(pokemon);
  }
}
