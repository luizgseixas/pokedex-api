import { PokemonApiRequester } from '@src/adapters/poke-api/api';
import { GetPokemonInformation, MapFamilyTree } from '@src/data/usecases';
import { GetPokemonInformationsController } from '@src/presentation/controllers';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonInformationsController = (): IController => {
  const api = new PokemonApiRequester();
  const mapPokemonFamilyTree = new MapFamilyTree(api);
  const getPokemonInformation = new GetPokemonInformation(mapPokemonFamilyTree, api);
  return new GetPokemonInformationsController(getPokemonInformation);
};
