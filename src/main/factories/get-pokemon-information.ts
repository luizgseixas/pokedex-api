import { PokeApiRequester } from '@src/infra/api';
import { GetPokemonInformation, MapFamilyTree } from '@src/data/usecases';
import { GetPokemonInformationsController } from '@src/presentation/controllers';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonInformationsController = (): IController => {
  const api = new PokeApiRequester();
  const mapPokemonFamilyTree = new MapFamilyTree(api);
  const getPokemonInformation = new GetPokemonInformation(api, mapPokemonFamilyTree);
  return new GetPokemonInformationsController(getPokemonInformation);
};
