import { PokeApiRequester } from '@src/infra/api';
import { GetPokemonsList } from '@src/data/usecases';
import { GetPokemonsListController } from '@src/presentation/controllers';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonListController = (): IController => {
  const api = new PokeApiRequester();
  const getPokemonList = new GetPokemonsList(api);
  return new GetPokemonsListController(getPokemonList);
};
