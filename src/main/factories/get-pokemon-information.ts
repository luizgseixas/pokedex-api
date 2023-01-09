import { PokeApiRequester } from '@src/infra/api';
import { GetPokemonInformationUseCase, MapFamilyTreeUseCase } from '@src/data/usecases';
import { GetPokemonInformationsController } from '@src/presentation/controllers';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonInformationsController = (): IController => {
  const api = new PokeApiRequester();
  const mapPokemonFamilyTree = new MapFamilyTreeUseCase(api, api);
  const getPokemonInformation = new GetPokemonInformationUseCase(api, mapPokemonFamilyTree);
  return new GetPokemonInformationsController(getPokemonInformation);
};
