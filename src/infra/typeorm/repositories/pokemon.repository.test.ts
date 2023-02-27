/* eslint-disable import/no-extraneous-dependencies */
import { PokemonModel } from '@src/domain/models/pokemon';
import { IBackup } from 'pg-mem';
import { DataSource, Repository } from 'typeorm';
import { makeDbInMemory } from '../../pg-mem';
import { MovesEntity, PokemonsEntity, TypesEntity } from '../entities';
import { mockPokemonEntity } from '../test/entities/mock-pokemon';
import { PokemonsRepository } from './pokemon.repostiory';

describe('PokemonRepository', () => {
  let pokemonRepository: Repository<PokemonsEntity>;
  let sut: PokemonsRepository;
  let datasource: DataSource;
  let backaup: IBackup;

  beforeAll(async () => {
    const database = await makeDbInMemory([PokemonsEntity, MovesEntity, TypesEntity]);
    datasource = database.dataSource;
    backaup = database.db.backup();
    pokemonRepository = datasource.getRepository(PokemonsEntity);
  });

  beforeEach(async () => {
    backaup.restore();
    sut = new PokemonsRepository(pokemonRepository);
  });

  afterAll(async () => {
    await datasource.destroy();
  });

  describe('findByName', () => {
    it('should call findOne with correct params', async () => {
      const findOneSpy = jest.spyOn(pokemonRepository, 'findOne');

      await sut.findByName('any_pokemon_name');

      expect(findOneSpy).toHaveBeenCalledWith({
        where: {
          name: 'any_pokemon_name',
        },
      });
    });

    it('should return null if not found a pokemon', async () => {
      const pokemon = await sut.findByName('any_pokemon_name');

      expect(pokemon).toBeNull();
    });

    it('should return a PokemonModel if found a pokemon with param name', async () => {
      const newPokemon = pokemonRepository.create(mockPokemonEntity());
      await pokemonRepository.save(newPokemon);
      const pokemon = await sut.findByName('any_pokemon_name');

      expect(pokemon).toBeInstanceOf(PokemonModel);
    });
  });
});
