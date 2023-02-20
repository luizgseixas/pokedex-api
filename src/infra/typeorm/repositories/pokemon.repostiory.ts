import { ISavePokemonRepository, IFindPokemonByNameRepository } from '@src/data/contracts/db/pokemon';
import { PokemonModel } from '@src/domain/models/pokemon';
import { Repository } from 'typeorm';
import { PokemonsEntity } from '../entities';

export class PokemonsRepository implements ISavePokemonRepository, IFindPokemonByNameRepository {
  constructor (private readonly pokemonsRepository: Repository<PokemonsEntity>) {}

  async findByName (name: string): Promise<PokemonModel> {
    return this.pokemonsRepository.findOne({
      where: {
        name,
      },
    });
  }

  async save (params: ISavePokemonRepository.Params): ISavePokemonRepository.Result {
    const pokemon = this.pokemonsRepository.create(params);
    await this.pokemonsRepository.save(pokemon);
  }
}
