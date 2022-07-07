import { GetPokemonInformationFeature, MapFamilyTreeFeature } from '@src/data/usecases';
import { GetPokemonInformationController } from '@src/presentation/controllers/get-pokemon-information.controller';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonInformationController = (): IController => {
  const mapPokemonFamilyTree = new MapFamilyTreeFeature();
  const getPokemonInformationFeature = new GetPokemonInformationFeature(mapPokemonFamilyTree);
  return new GetPokemonInformationController(getPokemonInformationFeature);
};
