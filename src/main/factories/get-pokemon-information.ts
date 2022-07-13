import { PokemonApiRequester } from '@src/adapters/poke-api/api';
import { GetPokemonInformation, MapFamilyTree } from '@src/data/usecases';
import { GetPokemonInformationController } from '@src/presentation/controllers/get-pokemon-information.controller';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonInformationController = (): IController => {
  const api = new PokemonApiRequester();
  const mapPokemonFamilyTree = new MapFamilyTree(api);
  const getPokemonInformation = new GetPokemonInformation(mapPokemonFamilyTree, api);
  return new GetPokemonInformationController(getPokemonInformation);
};
