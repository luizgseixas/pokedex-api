import { GetPokemonsListFeature } from '@src/data/usecases';
import { GetPokemonsListController } from '@src/presentation/controllers';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonListController = (): IController => {
  const getPokemonListFeature = new GetPokemonsListFeature();
  return new GetPokemonsListController(getPokemonListFeature);
};
