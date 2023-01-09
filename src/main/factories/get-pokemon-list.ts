import { PokeApiRequester } from '@src/infra/api';
import { GetPokemonsListUseCase } from '@src/data/usecases';
import { GetPokemonsListController } from '@src/presentation/controllers';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonListController = (): IController => {
  const api = new PokeApiRequester();
  const getPokemonList = new GetPokemonsListUseCase(api);
  return new GetPokemonsListController(getPokemonList);
};
