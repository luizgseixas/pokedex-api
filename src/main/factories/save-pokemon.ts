import { SavePokemonUseCase } from '@src/data/usecases/pokemon/save-pokemon/save-pokemon.usecase';
import { ISavePokemon } from '@src/domain/usecases/pokemon/save-pokemon';
import { PokemonsEntity } from '@src/infra/typeorm/entities';
import { PostgresTypeOrmDataSource } from '@src/infra/typeorm/postgres-datasource';
import { PokemonsRepository } from '@src/infra/typeorm/repositories/pokemon';

const makeSavePokemonUseCase = (): ISavePokemon => {
  const pokemonRepository = PostgresTypeOrmDataSource.instance.getRepository(PokemonsEntity);
  const savePokemonRepostiory = new PokemonsRepository(pokemonRepository);
  return new SavePokemonUseCase(savePokemonRepostiory);
};
